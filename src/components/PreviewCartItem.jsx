import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

function PreviewCartItem(props) {
    const dispatch = useDispatch();

    const removeItemFromCart = () => {
        dispatch(cartActions.removeFromCart({
            id: props.id,
            price: props.price,
            orders: props.orders
        }));
    }

    return (
        <Container>
            <div className="item-img">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="item-title">
                <Link to={`/shop/${props.id}`}>{props.name}</Link>
                <div className="item-price">
                    <p>${props.price}</p>
                    <span>x{props.orders}</span>
                </div>
            </div>
            <div className="item-removal-btn">
                <button onClick={removeItemFromCart}>
                    <i className="far fa-times-circle"></i>
                </button>
            </div>
        </Container>
    )
}

export default PreviewCartItem;

const Container = styled.div`
    display: flex;
    justify-content: space-around;

    .item-img {
        margin-right: 10px;
        img {
            width: 100px;
            height: 100px;
        }
    }

    .item-title {

        a {
            color: blue;
            font-size: 18px;

            &:hover {
                color: goldenrod;
                transition: 0.25s;
            }
        }

        .item-price {
            margin-top: 10px;
            display: flex;
            align-items: flex-end;

            p {
                margin-right: 1rem;
            }
        }
    }

    .item-removal-btn {

        button {
            border: none;
            background: none;
            cursor: pointer;
            
            i {
                font-size: 24px;

                &:hover {
                    color: #ff595e;
                }
            }
        }
    }
`