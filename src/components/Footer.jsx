import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <div className="contact-div">
                <h4>Contact Us</h4>
                <p>Call us 24/7</p>
                <p className="phone-number">1800 97 97 69</p>
                <p>502 New Design Str, Melbourne, Australia<br />contact@martfury.co</p>

                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>

            <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><p>Term and Condition</p></li>
                    <li><p>Policy</p></li>
                    <li><p>Shipping</p></li>
                    <li><p>Return</p></li>
                    <li><p>FAQs</p></li>
                </ul>
            </div>

            <div className="company">
                <h4>Company</h4>
                <ul>
                    <li><p>About</p></li>
                    <li><p>Affiliate</p></li>
                    <li><p>Career</p></li>
                    <li><p>Contact</p></li>
                </ul>
            </div>

            <div className="business">
                <h4>Business</h4>
                <ul>
                    <li><p>Our Press</p></li>
                    <li><p>Checkout</p></li>
                    <li><p>My Account</p></li>
                    <li><p>Shop</p></li>
                </ul>
            </div>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 4rem;

    .contact-div {
        grid-column: 1/ span 2;

        h4 {
            font-size: 1.3rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }

        p {
            margin: 0.5rem 0;
            line-height: 25px;

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        .phone-number {
            font-weight: bold;
            color: #ff595e;
            font-size: 2.5rem;
            margin: 1rem 0;
        }

        .icons {
            margin-top: 1rem;

            i {
                font-size: 20px;
                margin: 0 1rem;
                cursor: pointer;
            }

            i:nth-child(1) {
                color: navy;
                margin-left: 0;
            }

            i:nth-child(2) {
                color: skyblue;
            }

            i:nth-child(3) {
                color: red;
            }

            i: nth-child(4) {
                color: #ff595e;
            }
        }

        @media (max-width: 1024px) {
            grid-column: 1/ span 1;
        }

        
        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 3rem;
        }
    }

    .quick-links {
        padding: 0 2rem;
        margin-bottom: 2rem;

        h4 {
            font-size: 1.3rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }

        ul {
            list-style: none;

            li {
                padding: 0.5rem 0;
            }

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 3rem;
        }
    }

    .company {
        margin-bottom: 2rem;

        h4 {
            font-size: 1.3rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }

        ul {
            list-style: none;

            li {
                padding: 0.5rem 0;
            }

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 3rem;
        }
    }

    .business {
        padding: 0 2rem;
        margin-bottom: 2rem;

        h4 {
            font-size: 1.3rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }

        ul {
            list-style: none;

            li {
                padding: 0.5rem 0;
            }

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 3rem;
        }
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 2rem;
    }
`