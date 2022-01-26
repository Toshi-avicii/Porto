import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import { Transition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { mobileMenuActions } from '../../store/menuSlice';


function MobileMenuLink() {

    const dispatch = useDispatch();
    const menuSidebar = useRef();
    const menuSidebarState = useSelector(state => state.mobileMenu.menuSidebar);
    const [sidebarState, setSidebarState] = useState(false);

    useEffect(() => {
        if(menuSidebarState) {
            setSidebarState(true);
        }

        if(!menuSidebarState) {
            setSidebarState(false);
        }
    }, [menuSidebarState]);

    const defaultStyles = {
        transform: 'translateX(-100%)',
        opacity: 0
    }

    const transitionStyles = {
        entered: { transform: 'translateX(0%)', opacity: 1 }
    }

    const closeMenuHandler = () => {
        dispatch(mobileMenuActions.closeMenuSidebar());
    }

    const content = (
        <Transition
         in={sidebarState}
         timeout={25} 
         nodeRef={menuSidebar}
         mountOnEnter 
         unmountOnExit
        >
            {state => 
                <Container 
                 ref={menuSidebar}
                 style={ {...defaultStyles , ...transitionStyles[state]} } 
                >
                    <div className="menu-header">
                        <h2>MENU</h2>
                        <button className="close-btn" onClick={closeMenuHandler}>
                            <CloseOutlined style={{ fontSize: '16px', padding: 0 }} />
                        </button>
                    </div>
                    <ul>
                        <li>
                            <Link to="/" onClick={closeMenuHandler}>Home</Link>
                        </li>
                        <li>
                        <Link to="/shop" onClick={closeMenuHandler}>Shop</Link>
                        </li>
                        <li>
                            <Link to="/about-us" onClick={closeMenuHandler}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" onClick={closeMenuHandler}>Contact Us</Link>
                        </li>
                    </ul>
                </Container>
            }
        </Transition>
    )

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

    .menu-header {
        background: #ff595e;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        position: relative;

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
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
        align-items: flex-start;

        li {
            width: 100%;
            padding: 1rem;

            &:hover {
                background: #ff595e;
                transition: 0.25s;

                a {
                    color: white;
                }
            }

            a {
                display: inline-block;
                text-decoration: none;
                color: black;
                width: 100%;
                height: 100%;
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
`