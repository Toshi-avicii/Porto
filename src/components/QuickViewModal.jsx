import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { toast } from 'react-toastify';
import { cartActions } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import ImageGallery from 'react-image-gallery';

toast.configure();
function QuickViewModal(props) {
    const dispatch = useDispatch();
    const modalRef = useRef(null);
    const [quantity, setQuantity] = useState(1);

    const duration = 300;

    const increaseQuantity = () => {
        setQuantity(prevState => prevState + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(prevState => prevState - 1);
    }

    const toastHandler = () => {

        dispatch(cartActions.addToCart({
            id: props.id,
            name: props.title,
            image: props.images[0],
            description: props.description,
            price: props.price,
            quantity: Number(quantity)
        }));

        toast.success(`${quantity === 1 ? 'Item added to the cart' : `${quantity} Items added to the cart`}`, {
            theme: 'dark',
            toastId: 'add-to-cart'
        });
    }

    const wishlistToastHandler = () => {

        dispatch(cartActions.addToWishlist({
            id: props.id,
            name: props.title,
            image: props.images[0],
            description: props.description,
            price: props.price,
            quantity: Number(quantity)
        }));

        toast.success('Item added to the Wishlist', {
            theme: 'dark',
            toastId: 'add-to-wishlist'
        });
    }

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

    const productImages = props.images.map(original => {
        return { original: original, thumbnail: original }
    });

    const modalVisibilityHandler = () => {
        props.closeModal(false);
    }

    return (
        <Transition
            in={props.showModal}
            timeout={duration}
            nodeRef={modalRef}
            mountOnEnter unmountOnExit
        >
            {state => (
                ReactDOM.createPortal(
                    <ModalBackdrop>
                        <Container style={{ ...defaultStyles, ...transitionStyles[state] }}>
                            <div className="modal-title">
                                <h1>Quick View</h1>
                                <button onClick={modalVisibilityHandler}>
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                
                            <div className="product-container">
                                <div className="product-gallery">
                                    <ImageGallery 
                                        items={productImages} 
                                        showPlayButton={false} 
                                    />
                                </div>
                                <div className="product-info">
                                    <div className="product-title">
                                        <h1>{props.title}</h1>
                                    </div>
                                    <hr />
                                    <div className="product-price">
                                        <del>{props.prevPrice === props.price ? null : `$${props.prevPrice}`}</del>
                                        <h2>${props.price}</h2>
                                    </div>
                                    <div className="product-points">
                                        <ul className="list">
                                            {props.points.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })}
                                        </ul>
                                    </div>
                                    <hr />
                                    <p style={{ margin: '32px 0 0 0' }}>Quantity</p>
                                    <div className="product-btns">
                                        <div className="product-quantity">
                                            <button onClick={decreaseQuantity} disabled={quantity === 1}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <p>{quantity}</p>
                                            <button onClick={increaseQuantity}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>

                                        <div className="product-add-to-cart">
                                            <button className="atc" onClick={toastHandler} >Add To Cart</button>
                                            <button className="bn">Buy Now</button>

                                            <button className="wishlist-btn" onClick={wishlistToastHandler}>
                                                <FavoriteBorderIcon style={{ fontSize: '40px' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </ModalBackdrop>,
                    document.getElementById('product-modal')
                )
            )}
        </Transition>
    );
}

export default QuickViewModal;

const ModalBackdrop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 15;
    background: rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
`


const Container = styled.div`
    background: white;
    padding: 2rem;
    width: 85vw;

    .modal-title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.75rem 1rem;

            i {
                font-size: 25px;
            }

            &:hover {
                background: #ff595e;
                transition: 0.25s;
                color: white;
            }
        }
    }

    .product-container {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 3fr 5fr;
        grid-column-gap: 2rem;
        padding: 1.5rem 3rem;

        .product-gallery {
            flex: 1;
            padding: 0rem 2rem;

            @media (max-width: 768px) {
                padding: 1rem;
            }
        }

        .product-info {
            flex: 2;
            margin-left: 1rem;

            p {
                @media(max-width: 992px) {
                    padding-left: 1rem;
                }
            }

            .product-title {
                margin-bottom: 10px;
                h1 {
                    font-weight: 400;
                }

                @media(max-width: 992px) {
                    padding: 1rem;

                    h1 {
                        font-size: 25px;
                    }
                }
            }

            .product-price {
                display: flex;
                margin-top: 1.5rem;

                del {
                    font-size: 24px;
                    margin-right: 1rem;
                }

                h2 {
                    font-size: 1.75rem;
                    font-weight: 500;
                }

                @media(max-width: 992px) {
                    padding-left: 1rem;
                }
            }

            .product-points {
                .list {
                    list-style-type: disc !important;
                    padding: 1rem 1.5rem;
                    
                    li {
                        color: #666;
                        margin: 12px 0;
                    }
                }

                @media(max-width: 992px) {
                    padding: 1rem;

                    .list {
                        padding: 0 1rem;
                    }
                }
            }

            hr {
                border: 1px solid lightgrey;
            }

            .product-btns {
                display: flex;
                align-items: center;
                margin: 8px 0 2rem 0;

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

                .product-add-to-cart {
                    padding: 0 0.5rem;
                    display: flex;

                    button {
                        padding: 0.5rem 1.5rem;
                        border-radius: 4px;
                        background: black;
                        color: white; 
                        cursor: pointer;
                        font-size: 16px;
                        border: none;

                        @media(max-width: 992px) {
                            padding: 0.9rem 1rem;
                        }
                    }

                    button.atc:hover {
                        background: #ff595e;
                        transition: 0.25s;
                    }

                    button.bn {
                        background: #ff595e;
                        margin: 0 0.75rem;

                        @media(max-width: 992px) {
                            margin: 15px 0 0 0;
                        }
                    }

                    button.bn:hover {
                        background: black;
                        transition: 0.25s;
                    }

                    button.wishlist-btn {
                        background: none;
                        color: #b1b1b1;
                        padding: 0;
                        align-self: flex-end;

                        @media(max-width: 992px) {
                            display: none;
                        }
                    }

                    @media(max-width: 992px) {
                        width: 100%;
                        padding: 0rem;
                        margin-top: 1.5rem;
                        flex-direction: column;
                    }
                }

                @media(max-width: 992px) {
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 1rem;
                    margin-bottom: 1rem;
                }
            }

            @media (max-width: 1400px) {
                grid-column-start: 2;
                grid-column-end: 4;
            }

            @media (max-width: 992px) {
                margin-top: 2rem;
                margin-left: 0;
                padding: 0;
            }
        }

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
        }

        @media (max-width: 576px) {
            padding: 0;
        }
    }

    @media (max-width: 768px) {
        height: 80vh;
        overflow-y: overlay;
    }

    @media (max-width: 576px) {
        height: 100vh;
        width: 100vw;
        padding: 1rem;
    }
`