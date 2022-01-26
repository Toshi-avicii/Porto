import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector } from 'react-redux';
import SecondNavbar from '../SecondNavbar';
import SearchBar from './SearchBar';
import PreviewCartModal from '../PreviewCartModal';

function Navbar() {
    
    const userName = useSelector(state => state.auth.userName);
    const userEmail = useSelector(state => state.auth.userEmail);
    const userId = useSelector(state => state.auth.userId);
    const userImg = useSelector(state => state.auth.userImage);
    const productsInCart = useSelector(state => state.cart.totalItems);
    const productsInWishlist = useSelector(state => state.cart.totalWishlistItems);
    
    const [wishlistHoverColor, setWishlistHoverColor] = useState(false);
    const [cartIconHoverColor, setCartIconHoverColor] = useState(false);
    const [docHeight, setDocHeight] = useState(0);
    const [cartPreview, setCartPreview] = useState(false);
    
    useEffect(() => {
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            if(navbar) {
                if(window.pageYOffset > 120) {
                    setDocHeight(true);
                } else {
                    setDocHeight(false);
                }
            }
    
            if(docHeight) {
                navbar.classList.add('highlight-nav');
            } else {
                navbar.classList.remove('highlight-nav');
            }
        })
    }, [docHeight]);

    const setPreview = () => {
        setCartIconHoverColor(true);
        setCartPreview(true);
    }

    const setPreviewCart = () => {
        setCartIconHoverColor(false);
        setCartPreview(false);
    }

    return (
        <>
            <Container className="navbar">
                <Link to="/">Porto</Link>
                <SearchBar />
                <IconBox>
                    <WishList>
                        <Link to="/wishlist">
                            <FavoriteBorderIcon 
                            onMouseEnter={() => setWishlistHoverColor(true)} 
                            style={{ color: wishlistHoverColor ? '#ff595e': 'white', fontSize: '2.1rem', cursor: 'pointer', transition: '0.3s', margin: '0 0.75rem' }} 
                            onMouseLeave={() => setWishlistHoverColor(false)}
                            />
                            <div className="wish-counter">{productsInWishlist}</div>
                        </Link>
                    </WishList>
                    <CartIconBox onMouseEnter={setPreview} onMouseLeave={setPreviewCart}>
                        <ShoppingCartOutlinedIcon 
                        style={{ color: cartIconHoverColor ? '#ff595e' : 'white', fontSize: '2.1rem', cursor: 'pointer', transition: '0.3s', margin: '0 0.75rem' }} 
                        />
                        <div className="cart-counter">{productsInCart}</div>
                        <PreviewCartModal modalState={cartPreview} />
                    </CartIconBox>

                    <AuthenticationBox>
                        {!(userName || userEmail || userId) && <PersonOutlineIcon 
                        style={{ color: 'white', fontSize: '2.6rem', transition: '0.3s', margin: '0 0.75rem', height: '100%' }}
                        />}
                        <LoginAndRegisterBox>
                            {!(userName || userEmail || userId) &&
                                <Link to="/account/login">Login</Link>
                            }
                            {!(userName || userEmail || userId) &&
                                <Link to="/account/register">Register</Link>
                            }

                            {((userName || userEmail || userId) && userImg) &&
                                <Link className="profile-icon" to={`/account/${userId}`}>
                                    <img 
                                        src={userImg}
                                        width="35px"
                                        height="35px"
                                        style={{ borderRadius: "50%", marginLeft: '5px' }}
                                        alt={userEmail}
                                    />
                                </Link>
                            }

                            {
                                ((userName || userEmail || userId) && !userImg) &&
                                <Link to={`/account/${userId}`}>
                                    <AccountCircleIcon 
                                        style={{ color: 'white', fontSize: '25px' }}
                                    />
                                </Link>
                            }
                        </LoginAndRegisterBox>
                    </AuthenticationBox>
                </IconBox>
            </Container>
            <hr style={{ height: '1px', border: 'none', background: '#f6f6f6' }} />
            <SecondNavbar /> 
        </>
    )
}

export default Navbar;

const Container = styled.div`
    background-color: #000013;
    height: 5.5rem;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
    }

    @media (max-width: 1024px) {
        height: 5rem;
    }

    @media (max-width: 768px) {
        height: 4rem;
    }

    &.highlight-nav {
        position: sticky;
        top: 0;
        z-index: 8;
        width: 100%;
        animation: highlightNav 0.5s linear ease-out;
    }

    @keyframes highlightNav {
        from {
            transform: translateY(-100%);
        }

        to {
            transform: translateY(0);
        }
    }
`

const IconBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
`

const WishList = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .wish-counter {
        position: absolute;
        bottom: -4px;
        right: 10px;
        background: #f6f6f6;
        color: black;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        text-align: center;
        font-size: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 992px) {
        display: none;
    }
`

const CartIconBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .cart-counter {
        position: absolute;
        bottom: -4px;
        right: 10px;
        background: #f6f6f6;
        color: black;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        text-align: center;
        font-size: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 992px) {
        display: none;
    }
`

const AuthenticationBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
        font-weight: bold;
        font-size: 0.8rem;
    }

`

const LoginAndRegisterBox = styled.div`

    a {
        color: white;
        display: block;
        text-decoration: none;
    }

    button {
        text-transform: capitalize;
        letter-spacing: 1px;
        padding: 0.5rem 1rem;
        background: #ff595e;
        color: white;
        cursor: pointer;
        border-radius: 4px;
        margin-top: 0.25rem;
        border: none;

        &:hover {
            color: black;
            background: white;
        }
    }
`
