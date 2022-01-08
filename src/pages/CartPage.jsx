import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartTable from '../components/CartTable';
import CartItem from '../components/CartItem';

function CartPage() {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <Container>
            <div className="cart-title">
                <h1>Shopping Cart</h1>
            </div>
            <CartTable headerRowContent={{ 
                first: 'product',
                second: 'price',
                third: 'quantity',
                fourth: 'total',
                fifth: 'actions'
            }}></CartTable>
            {cartItems.map(item => {
                return (
                    <CartItem 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        orders={item.orders}
                    />
                )
            })
            }
            {cartItems.length === 0 && <p>No items in the cart</p>}
        </Container>
    )
}

export default CartPage;

const Container = styled.div`
    padding: 1.5rem 3.5rem;

    .cart-title {
        margin: 2rem 0;
        h1 {
            font-size: 4rem;
            text-align: center;
            font-size: 600;
        }
    }

    @media (max-width: 576px) {
        padding: 1rem;

        .cart-title {
            h1 {
                font-size: 2rem;
            }
        }

        .cart-item-row {
            overflow-x: scroll;

            .cart-item-product {
                min-width: 100%;
            }

            .cart-item-price {
                min-width: 50%;
            }

            .cart-item-quantity {
                min-width: 50%;
            }

            .cart-item-totalprice {
                min-width: 50%;
            }

            .cart-item-actions {
                min-width: 50%;
            }
        }
    }

`
