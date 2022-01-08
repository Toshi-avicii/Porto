import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

function CartItem(props) {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    
    const removeItem = () => {
        dispatch(cartActions.removeFromCart({
            id: props.id,
            price: props.price,
            orders: props.orders
        }))
    }

    const decreaseQuantity = () => {
        dispatch(cartActions.removeOneFromCart({
            id: props.id,
            price: props.price
        }))
    }

    const increaseQuantity = () => {
        dispatch(cartActions.addToCart({
            id: props.id,
            name: props.title,
            image: props.image,
            description: props.description,
            price: props.price,
            quantity: 1
        }))
    }

    return (
        <Container>
            <div className="cart-item-row" key={props.id}>
                <div className="cart-item-product">
                    <img src={props.image} alt={props.name} width="100" height="100" />
                    <Link to={`/shop/${props.id}`}>{props.name}</Link>
                </div>
                <div className="cart-item-price">
                    <p>${props.price}</p>
                </div>
                <div className="cart-item-quantity">
                    <div className="product-quantity">
                        <button onClick={decreaseQuantity} disabled={props.orders === 1}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <p>{props.orders}</p>
                        <button onClick={increaseQuantity}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="cart-item-totalprice">
                    <p>${props.orders * props.price}</p>
                </div>
                <div className="cart-item-actions">
                    <button onClick={removeItem}>
                        <i className="far fa-times-circle"></i>
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default CartItem;

const Container = styled.div`
.cart-item-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cart-item-product {
        flex: 2;
        display: flex;
        align-items: center;

        a {
            margin-left: 1rem;
            text-decoration: none;
            color: blue;
            font-size: 1.2rem;

            &:hover {
                color: goldenrod;
                transition: 0.25s;
            }
        }
    }

    .cart-item-price {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        
        p {
            font-size: 1.25rem;
        }
    }

    .cart-item-quantity {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .product-quantity {
            display: flex;
            justify-content: space-around;
            border: 1px solid lightgrey;
            padding: 0.75rem 0.5rem;
            width: 170px;

            p {
                @media(max-width: 992px) {
                    padding: 0;
                }
            }

            button {
                background: none;
                border: none;
                cursor: pointer;

                i {
                    font-size: 1.25rem;
                    color: grey;
                }

                &:disabled {
                    i {
                        color: lightgrey;
                    }
                }
            }

            p {
                margin: 0 1.5rem;
                font-size: 18px;
            }

            @media(max-width: 992px) {
                padding: 1rem;
                width: 100%;
            }
        }
    }

    .cart-item-totalprice {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 1.25rem;
            font-weight: 600;
        }
    }

    .cart-item-actions {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            background: none;
            border: none;
            cursor: pointer;

            i {
                font-size: 24px;

                &:hover {
                    color: #ff595e;
                    transition: 0.25s;
                }
            }
        }
    }
}
`