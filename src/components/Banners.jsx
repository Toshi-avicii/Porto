import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Banners() {
    return (
        <Container>
            <div className="section-img">
                <Link to="/shop">
                    <img src="/assets/section-img-1.jpeg" alt="sale" />
                </Link>
            </div>
            <div className="section-img">
                <Link to="/shop">
                    <img src="/assets/section-img-2.jpeg" alt="sale" />
                </Link>
            </div>
            <div className="section-img">
                <Link to="/shop">
                    <img src="/assets/section-img-3.jpeg" alt="sale" />
                </Link>
            </div>
        </Container>
    )
}

export default Banners;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem 3rem;
    grid-column-gap: 10px;
    margin: 4rem 0;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 1rem;
    }

    @media (max-width: 576px) {
        padding: 1rem 1.5rem;
    }

    .section-img {


        &:nth-child(2) {
            display: flex;
            justify-content: center;

            @media (max-width: 768px) {
                display: block;
                margin: 1.5rem 0;
            }
        }

        &:nth-child(3) {
            display: flex;
            justify-content: flex-end;

            @media (max-width: 768px) {
                display: block;
            }
        }

        img {
            object-fit: cover;
            width: 95%;

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        @media (max-width: 576px) {
            margin: 0.75rem 0;
        }
    }

`