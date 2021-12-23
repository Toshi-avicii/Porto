import React from 'react';
import styled from 'styled-components';
import ListIcon from '@material-ui/icons/List';
import LocalMallOutlinedcon from '@material-ui/icons/LocalMallOutlined';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useDispatch } from 'react-redux';
import { mobileMenuActions } from '../store/menuSlice';

function MobileMenu() {

    const dispatch = useDispatch();

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
                    <ShoppingCartOutlined />
                    Cart
                </li>

                <li>
                    <FavoriteBorderOutlinedIcon />
                    Wishlist
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
        }
    }

    @media (max-width: 992px) {
        display: block;
    }
`