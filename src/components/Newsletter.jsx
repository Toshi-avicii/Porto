import React from 'react';
import styled from 'styled-components';

function Newsletter() {
    return (
        <Container>
            <div className="newsletter-text">
                <h2>Newsletter</h2>
                <p>Subcribe to get information about products and coupons</p>
            </div>
            
            <form className="input-box">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Submit</button>
            </form>
        </Container>
    )
}

export default Newsletter;

const Container = styled.div`
    padding: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .newsletter-text {
        flex: 3;

        h2 {
            font-size: 2.25rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
    
        p {
            margin-bottom: 1rem;
        }  

        @media (max-width: 576px) {
            text-align: center;

            h2 {
                font-size: 1.75rem;
            }
        }
    }
    
    .input-box {
        flex: 4;
        display: flex;
        justify-content: stretch;
        align-items: stretch;

        input {
            width: 60%;
            border: 1px solid lightgrey;
            padding: 0 1rem;
            font-size: 1rem;
            border-radius: 0px;

            &::placeholder {
                font-size: 1rem;
            }

            &:focus {
                outline: none;
                border: 1px solid #ff595e;
            }

            @media (max-width: 576px) {
                width: 65%;
                padding: 0 0.5rem;
                font-size: 0.85rem;
            }
        }

        button {
            padding: 1rem 4rem;
            border: none;
            font-size: 1rem;
            background: #ff595e;
            color: white;
            cursor: pointer;

            &:hover {
                background: black;
                transition: 0.25s;
            }

            @media (max-width: 576px) {
                padding: 0.75rem 1.5rem;
                width: 35%;
            }
        }

        @media (max-width: 1024px) {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: stretch;
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 2rem;
    }

`