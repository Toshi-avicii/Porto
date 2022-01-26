import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import LocalMallOutlinedcon from '@material-ui/icons/LocalMallOutlined';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { mobileMenuActions } from '../store/menuSlice';

function MobileMenu() {

    const dispatch = useDispatch();
    const userCartItems = useSelector(state => state.cart.totalItems);
    const userWishlistItems = useSelector(state => state.cart.totalWishlistItems);

    const openMenuSidebar = () => {
        dispatch(mobileMenuActions.openMenuSidebar());
    }

    const openCategoriesSidebar = () => {
        dispatch(mobileMenuActions.openCategoriesSidebar());
    }

    return (
        <Container>
            <ul>
                <li onClick={openMenuSidebar}>
                    <ListIcon />
                    Menu
                </li>
                <li onClick={openCategoriesSidebar}>
                    <LocalMallOutlinedcon />
                    Categories
                </li>
                <li>
                    <Link to="/cart">
                        <ShoppingCartOutlined />
                        Cart
                        <span>{userCartItems}</span>
                    </Link>
                </li>

                <li>
                    <Link to="/wishlist">
                        <FavoriteBorderOutlinedIcon />
                        Wishlist
                        <span className="wishlist-items">{userWishlistItems}</span>
                    </Link>
                </li>
            </ul>
        </Container>
    )
}

export default MobileMenu;

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 0.5rem 1rem;
    // border-top: 1px solid lightgrey;
    display: none;
    z-index: 11;
    box-shadow: 0px 0px 12px #b1b1b1;

    ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        height: 100%;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            a {
                text-decoration: none;
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: relative;

                span {
                    position: absolute;
                    top: -5px;
                    right: -7px;
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                    background-color: #ff595e;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    padding: 0.5rem;
                }

                span.wishlist-items {
                    position: absolute;
                    top: -5px;
                    right: 10px;
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                    background-color: #ff595e;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                    padding: 0.5rem;
                }
            }
        }
    }

    @media (max-width: 992px) {
        display: block;
    }
`