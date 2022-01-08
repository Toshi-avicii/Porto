import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '@material-ui/icons/Menu';
import CategoryDropdown from './CategoryDropdown';

function SecondNavbar() {

    const [dropdown, setDropdown] = useState(false);

    const showDropdownHandler = (e) => {
        setDropdown(dropdown => !dropdown);
    }

    return (
        <>
        <Container>
            <ShopDropdown onClick={showDropdownHandler}> 
                <Menu style={{ cursor: 'pointer' }} />
                <p>Shop By Category</p>
            </ShopDropdown>
            <NavBarLinks>
                {/* replace these 'p' with links */}
                <NavLink to="/" className={isActive => isActive.isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/shop" className={isActive => isActive.isActive ? "active" : ""}>Shop</NavLink>
                <NavLink to="/about-us" className={isActive => isActive.isActive ? "active" : ""}>About Us</NavLink>
                <NavLink to="/contact-us" className={isActive => isActive.isActive ? "active" : ""}>Contact Us</NavLink>
            </NavBarLinks>
            <Miscelleanous>
                {/* replace these 'p' with links */}
                <p>Sell on Porto</p> | 
                <p>Track Your Order</p>
            </Miscelleanous>
        </Container>

        <CategoryDropdown dropdownState={dropdown} /> 
        </>
    )
}

export default SecondNavbar;

const Container = styled.div`
    height: 8vh;
    background-color: #000013;
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        height: 7vh;
    }

    @media (max-width: 992px) {
        display: none;
    }
`

const ShopDropdown = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    flex: 2;
    cursor: pointer;
    color: white;
    
    p {
        padding: 0 0 0 0.45rem;
    }
`

const NavBarLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 6;
    color: white;

    a {
        display: block;
        color: white;
        text-decoration: none;
        margin: 0 1rem;
    }

    a.active {
        color: #ff595e;
    }

    p {
        margin: 0 1rem;
    }

    @media (max-width: 768px) {
        flex: 5;
    }
`

const Miscelleanous = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: white;

    p {
        margin: 0 0.5rem;
    }
`