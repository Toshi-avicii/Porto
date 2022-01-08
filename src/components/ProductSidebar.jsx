import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BenifitsBox from './BenifitsBox';

function ProductSidebar() {
    return (
        <Container>
            <BenifitsBox height="250px" />
            <div className="sell">
                <p>Sell on Porto?</p>
                <Link to="/account/register">Register Now</Link>
            </div>
            <div className="sidebar-img">
                <Link to="/shop">
                    <img src="/assets/product-ads.png" alt="ad" />
                </Link>
            </div>
        </Container>
    )
}

export default ProductSidebar;

const Container = styled.div`

    padding: 1.5rem;

    .sell {
        display: flex;
        margin: 1.5rem 0;

        p {
            margin-right: 1rem;
        }

        a {
            text-decoration: none;
        }
    }

    @media (max-width: 1400px) {
        display: none;
    }
`