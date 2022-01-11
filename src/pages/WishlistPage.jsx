import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartTable from '../components/CartTable';
import WishlistItem from '../components/WishlistItem';
import Button from '../components/General/Button';
import Newsletter from '../components/Newsletter';
import Divider from '../components/General/Divider';

function CartPage() {
    const cartItems = useSelector(state => state.cart.wishlistItems);

    let cartPageContent;

    if(cartItems.length === 0) {
        cartPageContent = <Container>
            <p className="empty-list">No items in the wishlist.</p>
        </Container>
    }

    if(cartItems.length > 0) {
        cartPageContent = 
            <Container>
            <div className="cart-title">
                <h1>Wishlist</h1>
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
                    <WishlistItem 
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
        </Container>
    }

    return (
        <div>
            {cartPageContent}
            <CartButton>
                <Button 
                 to="/shop"
                 color="white"
                 bg="#010101"
                 padding="1rem 3rem"
                 rounded="4px"
                 title="Back to Shop"
                 fontSize="18px"
                 hoverBg="#ff595e"
                />
            </CartButton>

            <Divider />
            <Newsletter />
        </div>
    )
}

export default CartPage;

const Container = styled.div`
    p.empty-list {
        padding: 1rem;
        background: rgba(30, 144, 255, 0.5);
        color: white;
        border-radius: 4px;
        border: 2px solid rgb(30, 144, 255); 
    }

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

const CartButton = styled.div`
    padding: 1.5rem 3.5rem;

    @media (max-width: 576px) {
        padding: 1rem;
    }
`
