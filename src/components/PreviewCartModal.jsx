import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import { useSelector } from 'react-redux';
import PreviewCartItem from './PreviewCartItem';
import Button from './General/Button';
import { colRef, auth } from '../firebase';
import { getDocs, doc, arrayUnion, updateDoc } from 'firebase/firestore';

function PreviewCartModal(props) {
    const cartItems = useSelector(state => state.cart.items);
    const cartAmount = useSelector(state => state.cart.cartPrice);
    const userEmail = useSelector(state => state.auth.userEmail);
    const userId = useSelector(state => state.auth.userId);
    const modalRef = useRef(null);
    const duration = 300;

    const defaultStyles = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        transform: 'translateY(150px)',
    }

    const transitionStyles = {
        entering: { opacity: 0, transform: 'translateY(50px)' },
        entered: { opacity: 1, transform: 'translateY(0px)' },
        exiting: { opacity: 0.5, transform: 'translateY(100px)' },
        exited: { opacity: 0, transform: 'translateY(150px)' }
    }

    useEffect(() => {

        if(userId && userEmail) {
    
          const sendUserCart = async() => {
            const currentUser = auth.currentUser;
    
            const data = getDocs(colRef)
            .then((snapshot) => {
                
                let users = [];
                snapshot.docs.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                });
    
                return users;
            })
    
    
            const d = await data;
    
            const res = d.find(user => (user.emailId === currentUser.email));

            const docRef = await doc(colRef, res.id);
            
            if(res) {
                console.log(res);
            }
          }
    
          try {
            sendUserCart();
          } catch(error) {
            console.log(error.message);
          }
        }
    
      }, [userId, userEmail, cartAmount, props.id, cartItems]); 


    let modalContent;

    if(cartItems.length === 0) {
        modalContent = <p>No items in the cart</p> 
    }

    if(cartItems.length > 0) {
        modalContent = cartItems.map(item => {
            return (
                <PreviewCartItem 
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    orders={item.orders}
                    description={item.description}
                    id={item.id}
                />
            )
        });
    }

    return (
        <Transition
            in={props.modalState}
            timeout={duration}
            nodeRef={modalRef}
            mountOnEnter unmountOnExit
        >
            {state => (
                <Container style={{ ...defaultStyles, ...transitionStyles[state], overflowY: 'scroll' }}>
                    { modalContent }
                    <CartAmount>
                        <h4>Sub Total: </h4>
                        <h4 className="cart-amount">${cartAmount.toFixed(2)}</h4>
                    </CartAmount>
                    <ModalButtons>
                        <Button 
                            to="/cart"
                            color="white"
                            bg="#010101"
                            padding="0.85rem 3rem"
                            rounded="4px"
                            title="View Cart"
                            fontSize="18px"
                            hoverBg="#ff595e"
                        />
                        <Button 
                            to="/cart"
                            color="white"
                            bg="#010101"
                            padding="0.85rem 3rem"
                            rounded="4px"
                            title="Checkout"
                            fontSize="18px"
                            hoverBg="#ff595e"
                        />
                    </ModalButtons>
                </Container>
            )}
        </Transition>
    )
}

export default PreviewCartModal;

const Container = styled.div`
    overflow-y: scroll;
    padding: 1.5rem;
    width: 500px;
    background: white;
    position: fixed;
    top: 70px;
    right: 50px;
    z-index: 15;
    border-radius: 2px;
    height: 500px;
    
    p {
        font-size: 19px;
        color: #010101;
    }
`

const CartAmount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h4 {
        font-size: 1.5rem;
    }

    h4.cart-amount {
        color: #ff595e;
        font-size: 1.8rem;
    }
`

const ModalButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`