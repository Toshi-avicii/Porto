import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import QuickViewModal from './QuickViewModal';

toast.configure();
function ProductItem(props) {
    const { title, img, discount, prevPrice, rating, price, id, description, categories, points } = props;
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id: id,
            name: title,
            image: img[0],
            description: description,
            price: price,
            quantity: 1
        }));

        toast.success('Item added to cart', {
            theme: 'dark',
            toastId: 'add-to-cart'
        });
    }

    const addToWishlistHandler = () => {
        dispatch(cartActions.addToWishlist({
            id: id,
            name: title,
            image: img[0],
            description: description,
            price: price,
            quantity: 1
        }));

        toast.success('Item added to Wishlist', {
            theme: 'dark',
            toastId: 'add-to-wishlist'
        });
    }

    const showModalHandler = () => {
        setShowModal(true);
    }

    return (
        <Box>
        <Container>
                <div className="product-img">
                    <Link to={`/shop/${id}`}>
                        <img src={Array.isArray(img) ? img[0] : img} width="200" height="200" alt={title} />
                    </Link>
                    <div className="view-product">
                        <button className="cart-btn" title="Add to cart" onClick={addToCartHandler}>
                            <i className="fa fa-shopping-bag"></i>
                        </button>
                        <button className="quick-view-btn" title="quick view" onClick={showModalHandler}>
                            <i className="far fa-eye"></i>
                        </button>
                        <button className="wishlist-btn" title="Add to wishlist" onClick={addToWishlistHandler}>
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
            <QuickViewModal 
              showModal={showModal} 
              key={id} 
              images={img}
              title={title}
              price={price}
              prevPrice={prevPrice}
              discount={discount}
              id={id}
              rating={rating}
              categories={categories}
              description={description}
              points={points}
              closeModal={setShowModal}
            />
        </Box>
    )
}

export default ProductItem;

const Box = styled.div`
    position: relative;
`

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