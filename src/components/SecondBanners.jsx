import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SecondBanners() {
    return (
        <Container>
            <Link to="/shop" className="first">
                <img src="/assets/section-img-4.jpeg" alt="sale" />
            </Link>

            <Link to="/shop" className="second">
                <img src="/assets/section-img-5.jpeg" alt="sale" />
            </Link>
        </Container>
    )
}

export default SecondBanners;

const Container = styled.div`
    display: flex;
    padding: 2rem;
    margin: 2rem 0;
    column-gap: 2rem;
    
    .first {
        object-fit: contain;
        flex: 2;

        img {
            width: 100%;
        }

        @media (max-width: 992px) {
            margin-bottom: 1.5rem;
        }

        @media (max-width: 576px) {
            margin-bottom: 1rem;

            img {
                height: 90px;
            }
        }
    }

    .second {
        display: flex;
        flex: 1;
        object-fit: contain;

        img {
            width: 100%;
        }
    }

    @media (max-width: 992px) {
        flex-direction: column;
        padding: 1rem;
        margin: 0.5rem 0;
    }
`
