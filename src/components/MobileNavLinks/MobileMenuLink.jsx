import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import { Transition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { mobileMenuActions } from "../../store/menuSlice";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { setUserLogout } from "../../store/authSlice";
import { cartActions } from "../../store/cartSlice";
// import useSearchData from '../../hooks/useSearchData';

function MobileMenuLink() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuSidebar = useRef();
  const menuSidebarState = useSelector((state) => state.mobileMenu.menuSidebar);
  const [sidebarState, setSidebarState] = useState(false);
  const currentUser = auth.currentUser;
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (menuSidebarState) {
      setSidebarState(true);
    }

    if (!menuSidebarState) {
      setSidebarState(false);
    }
  }, [menuSidebarState]);

  const defaultStyles = {
    transform: "translateX(-100%)",
    opacity: 0,
  };

  const transitionStyles = {
    entered: { transform: "translateX(0%)", opacity: 1 },
  };

  const closeMenuHandler = () => {
    dispatch(mobileMenuActions.closeMenuSidebar());
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogout());
        dispatch(
          cartActions.resetCart({
            items: [],
            totalItems: 0,
            cartPrice: 0,
          })
        );

        dispatch(
          cartActions.resetWishlist({
            wishlistItems: [],
            wishlistPrice: 0,
            totalWishlistItems: 0,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const content = (
    <Transition
      in={sidebarState}
      timeout={25}
      nodeRef={menuSidebar}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Container
          ref={menuSidebar}
          style={{ ...defaultStyles, ...transitionStyles[state] }}
        >
          {!currentUser && (
            <button
              className="close-btn user-not-logged-in"
              onClick={closeMenuHandler}
            >
              <CloseOutlined style={{ fontSize: "26px", padding: 0 }} />
            </button>
          )}
          {currentUser && (
            <UserProfile>
              {currentUser.photoURL && (
                <div className="user-image">
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                  />
                </div>
              )}

              {!currentUser.photoURL && (
                <div className="user-image">
                  <i
                    className="far fa-user-circle"
                    style={{ color: "white", fontSize: "50px" }}
                  ></i>
                </div>
              )}

              <div className="user-name">
                <h2>{currentUser.displayName}</h2>
              </div>
              <div className="user-email">
                <p>{currentUser.email}</p>
              </div>
              <button className="close-btn" onClick={closeMenuHandler}>
                <CloseOutlined style={{ fontSize: "16px", padding: 0 }} />
              </button>
            </UserProfile>
          )}
          <ul>
            <li>
              <Link to="/" onClick={closeMenuHandler}>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={closeMenuHandler}>
                <i className="fas fa-store"></i>
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={closeMenuHandler}>
                <i className="fas fa-info-circle"></i>
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={closeMenuHandler}>
                <i
                  className="fas fa-phone"
                  style={{ transform: "rotate(90deg)" }}
                ></i>
                <span>Contact Us</span>
              </Link>
            </li>
            {auth.currentUser && (
              <li className="logout">
                <button onClick={logoutHandler}>
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </button>
              </li>
            )}

            <li className="search-container">
              <div className="search-box">
                <div className="input-box">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={searchHandler}
                  />
                  <Link
                    to={`/search?keyword=${search}`}
                    onClick={closeMenuHandler}
                  >
                    <i className="fa fa-search"></i>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </Container>
      )}
    </Transition>
  );

  return ReactDOM.createPortal(content, document.getElementById("sidebar"));
}

export default MobileMenuLink;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: white;
  box-shadow: 0px 0px 12px lightgrey;
  z-index: 15;
  display: none;
  transition: all 0.5s ease-out;

  button.user-not-logged-in {
    position: fixed;
    top: 10px;
    right: 10px;
    border: none;
    background: white;
    padding: 5px;
    padding-bottom: 0px;
    border-radius: 4px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    li.logout {
      padding: 0 1rem;

      &:hover {
        background: #ff595e;
        transition: 0.25s;

        button {
          color: white;
          background: #ff595e;

          i {
            color: white;
          }
        }
      }
    }

    li.search-container {
      padding: 0 1rem;
      margin: 1rem 0;

      &:hover {
        background: white;
      }

      .search-box {
        display: flex;
        flex-direction: column;

        .label-box {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 10px;

          label {
            margin-right: 8px;
            font-size: 18px;

            i {
              color: #ff595e;
              font-size: 20px;
            }
          }
        }

        .input-box {
          display: flex;

          input {
            padding: 0.5rem 12px;
            margin: 0;
            border: 1px solid lightgrey;
            font-size: 15px;
          }

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            background-color: #ff595e;
            color: white;
            padding: 0.5rem 0px;

            i {
              color: white;
            }
          }
        }
      }
    }

    li {
      width: 100%;
      padding: 1rem;

      &:hover {
        background: #ff595e;
        transition: 0.25s;

        a {
          color: white;

          i {
            color: white;
          }
        }
      }

      a {
        display: flex;
        text-decoration: none;
        justify-content: flex-start;
        align-items: center;
        color: black;
        width: 100%;
        height: 100%;

        i {
          color: #ff595e;
          font-size: 20px;
          display: block;
          margin-right: 0.5rem;
        }

        span {
          font-size: 1rem;
        }
      }

      button {
        width: 100%;
        border: none;
        background: white;
        padding: 1rem 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          color: #ff595e;
          font-size: 20px;
          display: block;
          margin-right: 0.5rem;
        }

        span {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 992px) {
    display: block;
    width: 400px;
  }

  @media (max-width: 576px) {
    width: 75%;
  }
`;

const UserProfile = styled.div`
  background: #ff595e;
  color: white;
  padding: 2rem;
  position: relative;

  .user-image {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }
  }

  .user-name {
    padding: 0.5rem;
  }

  .user-name,
  .user-email {
    text-align: center;
  }

  button {
    position: fixed;
    top: 10px;
    right: 10px;
    border: none;
    background: white;
    padding: 5px;
    padding-bottom: 0px;
    border-radius: 4px;
  }
`;
