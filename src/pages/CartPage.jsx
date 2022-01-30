import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartTable from "../components/CartTable";
import CartItem from "../components/CartItem";
import Button from "../components/General/Button";
import Input from "../components/General/Input";
import Newsletter from "../components/Newsletter";
import Divider from "../components/General/Divider";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartPrice);

  return (
    <div>
      {cartItems.length === 0 ?
        <Container>
        <p className="empty-list">No items in the cart.</p>
      </Container>
       : 
       <Container>
       <div className="cart-title">
         <h1>Shopping Cart</h1>
       </div>
       <CartTable
         headerRowContent={{
           first: "product",
           second: "price",
           third: "quantity",
           fourth: "total",
           fifth: "actions",
         }}
       ></CartTable>
       {cartItems.map((item) => {
         return (
           <CartItem
             key={item.id}
             id={item.id}
             image={item.image}
             name={item.name}
             price={item.price}
             orders={item.orders}
           />
         );
       })}
     </Container>
      }
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

      <CartBill>
        <div className="box">
          <div className="cart-coupon">
            <div className="cart-coupon-heading">
              <p>Coupon Discount</p>
              <i className="fa fa-chevron-down"></i>
            </div>
            <div className="cart-coupon-input">
              <Input
                type="text"
                placeholder="Enter Coupon Code here..."
                id="coupon"
                padding="1"
                border="2px solid grey"
                width="100%"
                fontSize="18"
              />
              <Button
                color="black"
                bg="#fff"
                padding="1rem 2.5rem"
                title="Apply"
                fontSize="18px"
                hoverBg="#fff"
                border="2px solid grey"
                margin="2rem 0 0 0"
              />
            </div>
          </div>

          <div className="cart-checkout">
            <div className="t-box">
              <div className="cart-subtotal">
                <p>Subtotal</p>
                <p>${Math.round(cartTotal * 100) / 100}</p>
              </div>
              <hr />
              <div className="cart-items">
                {cartItems.map((item) => {
                  return (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-name">
                        <p>{item.name}</p>
                        <i>x{item.orders}</i>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>

              <div className="cart-total">
                <h2>Total</h2>
                <h2>${Math.round(cartTotal * 100) / 100}</h2>
              </div>
            </div>
            <div className="cart-checkout-btn">
              <Button
                to="/shop"
                color="white"
                bg="#ff595e"
                padding="1rem 3rem"
                rounded="4px"
                title="Proceed to Checkout"
                fontSize="18px"
                hoverBg="#010101"
              />
            </div>
          </div>
        </div>
      </CartBill>
      <Divider />
      <Newsletter />
    </div>
  );
}

export default CartPage;

const Container = styled.div`
  padding: 1.5rem 3.5rem;

  p.empty-list {
    padding: 1rem;
    background: rgba(30, 144, 255, 0.5);
    color: white;
    border-radius: 4px;
    border: 2px solid rgb(30, 144, 255);
  }

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
`;

const CartButton = styled.div`
  padding: 1.5rem 3.5rem;

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const CartBill = styled.div`
  padding: 1.5rem 3.5rem;

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cart-coupon {
      .cart-coupon-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;

        p {
          font-size: 24px;
        }

        i {
          font-size: 20px;
        }
      }

      .cart-coupon-input {
        margin-bottom: 2rem;
      }
    }

    .cart-checkout {
      display: flex;
      flex-direction: column;

      .t-box {
        background: #e7e7e7;
        padding: 3rem;

        .cart-subtotal {
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            font-size: 20px;
          }
        }

        hr {
          margin: 1rem 0;
        }

        .cart-items {
          margin: 1rem 0;

          .cart-item {
            .cart-item-name {
              p {
                margin-right: 10px;
                font-size: 18px;
              }

              i {
                display: inline-block;
                margin-top: 10px;
                font-style: normal;
              }
            }
          }
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          align-items: center;

          h2:nth-child(2) {
            color: red;
            font-size: 30px;
          }
        }
      }

      .cart-checkout-btn {
        margin-top: 1.5rem;
        margin-bottom: 2rem;
      }
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }

  @media (max-width: 576px) {
    padding: 1rem;
    flex-direction: column;
  }
`;
