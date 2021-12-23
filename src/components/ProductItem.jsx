import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { title, img, discount, prevPrice, rating, price, id } = props;

    return (
        <Container>
            <div className="product-img">
                <img src={img} width="200" height="200" alt={title} />
                <div className="view-product">
                    <button className="cart-btn">
                        <i className="fa fa-shopping-bag"></i>
                    </button>
                    <button className="quick-view-btn">
                        <i className="far fa-eye"></i>
                    </button>
                    <button className="wishlist-btn">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <hr />
            <div className="product-info">
                <div>
                    <p className="product-price">${price}</p> 
                    <del>${prevPrice}</del>
                    {discount && <p className="product-discount">{discount}% off</p>}
                </div>
            </div>

            {discount && <div className="discount-container">
                <i className="fa fa-tags"></i> -{discount}%
            </div>}

            <Link className="product-name" to={`/shop/${id}`}>{title}</Link>
            <p className="product-rating">Rating {rating} out of 5</p>
        </Container>
    )
}

export default ProductItem;

const Container = styled.div`
    display: flex !important;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    .product-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        .view-product {
            background: white;
            display: flex;
            justify-content: center;
            width: 100%;
            position: absolute;
            bottom: 0;
            transform: translateY(110%);
            padding: 1rem;
    
            button {
                margin: 0 20px;
                background: transparent;
                border: none;
                cursor: pointer;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.5s;

                i {
                    font-size: 20px;
                    color: grey;
                    transition: 0.25s;
                }

                &:hover {
                    background: #ff595e;

                    i {
                        color: white;
                    }
                }
            }
        }

        &:hover .view-product {
            transform: translateY(0);
            transition: 0.75s;
        }
    }

    hr {
        width: 90%;
        margin: auto;
    }

    .product-info {
        width: 100%;
        margin-top: 1rem;

        div {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 10px 0;

            .product-price {
                color: green;
                font-size: 24px;
                font-weight: 600;
                padding-right: 6px;
            }

            del {
                color: grey;
                padding-right: 4px;
            }

            .product-discount {
                color: red;
                font-size: 18px;
            }
        }
    }    

    .discount-container {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #ff595e;
        padding: 0.5rem;
        color: white;
    }

    .product-name {
        color: royalblue;
        width: 80%;
    }

    .product-rating {
        color: #898989;
        margin-top: 8px;
    }

    a {
        text-decoration: none;
        color: black;
    }
`