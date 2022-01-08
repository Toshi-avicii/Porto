import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import useFetchData from '../hooks/useFetchData';
import ImageGallery from 'react-image-gallery';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import ProductSidebar from '../components/ProductSidebar';
import ProductCarousel from '../components/ProductCarousel';
import { cartActions } from '../store/cartSlice';
 
toast.configure();
function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const productId = useParams().productId;
    const { data, loading } = useFetchData();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.back-btn-nav');
        if(nav) {
            if(window.pageYOffset > 60) {
                nav.classList.add('show-nav');
            } else {
                nav.classList.remove('show-nav');
            }
        }
    })

    const increaseQuantity = () => {
        setQuantity(prevState => prevState + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(prevState => prevState - 1);
    }

    const toastHandler = () => {
        const product = data.find(item => {
            return item.id === productId;
        })

        dispatch(cartActions.addToCart({
            id: product.id,
            name: product.title,
            image: product.images[0],
            description: product.description,
            price: product.price,
            quantity: Number(quantity)
        }));

        toast.success(`${quantity === 1 ? 'Item added to the cart' : `${quantity} Items added to the cart`}`, {
            theme: 'dark',
            toastId: 'add-to-cart'
        });
    }

    const wishlistToastHandler = () => {
        const product = data.filter(item => {
            return item.id === productId;
        }).map(product => {
            return product;
        });

        const item = product[0];

        dispatch(cartActions.addToWishlist({
            id: item.id,
            name: item.title,
            image: item.images[0],
            description: item.description,
            price: item.price,
            quantity: Number(quantity)
        }));

        toast.success('Item added to the Wishlist', {
            theme: 'dark',
            toastId: 'add-to-wishlist'
        });
    }
        
    const product = data.filter(item => {
        return item.id === productId;
    }).map(product => {
        const productImages = product.images.map(original => {
            return { original: original, thumbnail: original };
        });

        return (
            <div className="product-container" key={product.id}>
                <div className="product-img">
                    <ImageGallery 
                     items={productImages} 
                     showPlayButton={false} 
                    />
                </div>

                <div className="product-info">
                    <div className="product-title">
                        <h1>{product.title}</h1>
                    </div>
                    <hr />
                    <div className="product-price">
                        <del>{product.prevPrice === product.price ? null : `$${product.prevPrice}`}</del>
                        <h2>${product.price}</h2>
                    </div>
                    <div className="product-points">
                        <ul className="list">
                            {product.points.map((item, index) => {
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
                    <hr />
                </div>
                <ProductSidebar />
                <div className="product-description">
                    <h2>Description</h2>
                    <p>{product.description}</p>
                    <div className="desc-img">
                        <img src="/assets/description.jpg" alt="description" />
                    </div>
                </div>
                <div className="product-subs">
                    <ProductCarousel heading="Customers who bought this item also bought" />
                </div>
            </div>
        )
    });

    const productLoading = <div className="loading-product">
        <div className="loading-product-image">
            <Skeleton className="loading-img" />

            <div className="loading-product-thumbs">
                <Skeleton width={70} height={70} className="loading-thumb" />
                <Skeleton width={70} height={70} className="loading-thumb" />
                <Skeleton width={70} height={70} className="loading-thumb" />
                <Skeleton width={70} height={70} className="loading-thumb" />
            </div>
        </div>

        <div className="loading-product-info">
            <div className="loading-product-title">
                <Skeleton className="loading-title" />
                <Skeleton className="loading-title-sm" />
            </div>

            <div className="loading-product-price">
                <Skeleton style={{ marginTop: '20px' }} className="loading-price" />
            </div>

            <div className="loading-product-points">
                <Skeleton count={5} height={20} style={{ marginTop: '15px' }} className="loading-points" />
            </div>

            <div className="loading-product-btns">
                <Skeleton height={45} className="first" />
                <Skeleton height={45} className="second" />
                <Skeleton height={45} className="third" />
            </div>
        </div>
    </div>

    return (
        <Container>
            <div className="back-btn-nav">
                <div className="btn-nav">
                    <div className="back-btn">
                        <Link to="/shop">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="wishlist-btn">
                        <FavoriteBorderIcon />
                    </div>
                </div>
            </div>
            {loading ? productLoading : product}
        </Container>
    )
}

export default ProductPage;


const Container = styled.div`
    position: relative;

    .back-btn-nav {
        display: none;
        position: sticky;
        top: 0;
        z-index: 10;
        width: 100%;

        .btn-nav {
            background: #ff595e;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 1rem;

            a {
                background: transparent;
                text-decoration: none;
                color: white;

                i {
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        
        .back-btn-nav.show-nav {
            display: block;
        }

        .btn-nav.show-nav {
            animation: showNav 0.5s linear ease-out;
        }
    
        @keyframe showNav {
            from {
                top: -100%;
            } 
    
            to {
                top: 60;
            }
        }
    }

    .loading-product {
        display: flex;
        padding: 1.5rem 3rem;

        .loading-product-image {
            flex: 4;
            display: flex;
            flex-direction: column;

            .loading-img {
                height: 400px;

                @media(max-width: 576px) {
                    height: 250px;
                }
            }

            .loading-product-thumbs {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 1rem;

                .loading-thumb {
                    margin: 0 1rem;

                    @media (max-width: 576px) {
                        width: 40px;
                        height: 40px;
                        margin: 0 0.25rem;
                    }
                }

                @media (max-width: 576px) {
                    justify-content: space-between;
                }
            }
        }

        .loading-product-info {
            flex: 6;
            margin-left: 1rem;
            display: flex;
            flex-direction: column;

            .loading-product-title {
                .loading-title {
                    width: 90%;
                    margin-right: auto;
                }

                .loading-title-sm {
                    display: none;

                    @media (max-width: 576px) {
                        display: block;
                        margin-top: 6px;
                    }
                }

                @media (max-width: 576px) {
                    margin-top: 10px;
                }
            }

            .loading-price {
                width: 75%;
            }

            .loading-points {
                width: 50%;

                @media (max-width: 576px) {
                    width: 85%;
                    height: auto;
                } 
            }

            .loading-product-btns {
                margin-top: 30px;
                width: 80%;
                margin: 30px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .first {
                    width: 200px;

                    @media (max-width: 576px) {
                        width: 320px;
                        margin-bottom: 10px;
                    }
                }

                .second {
                    width: 150px;

                    @media (max-width: 576px) {
                        width: 320px;
                    }
                }

                .third {
                    width: 50px;

                    @media (max-width: 576px) {
                        display: none;
                    }
                }

                @media (max-width: 576px) {
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                }
            }

            @media (max-width: 576px) {
                margin-left: 0;
            }
        }
    }

    @media (max-width: 992px) {
        .loading-product {
            flex-direction: column;
            padding: 1rem 1.5rem;
        }
    }

    .product-container {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 3fr 5fr 2fr;
        grid-column-gap: 2rem;
        padding: 1.5rem 3rem;

        .product-img {
            flex: 1;

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

        .product-description {
            grid-column-start: 1;
            grid-column-end: 3;
            margin: 1rem 0;

            h2 {
                font-weight: 400;
                margin-bottom: 1rem;
                border-bottom: 2px solid grey;
            }

            p {
                line-height: 25px;
                text-align: justify;
            }

            .desc-img {
                padding: 1.5rem 0;
                
                img {
                    width: 100%;
                }
            }

            @media (max-width: 1400px) {
                grid-column-start: 1;
                grid-column-end: 4;
            }

            @media (max-width: 768px) {
                padding: 1rem;
            }
        }

        .product-subs {
            grid-column-start: 1;
            grid-column-end: 4;
            margin: 1rem 0;
            padding: 0;
        }

        @media(max-width: 992px) {
            display: flex;
            flex-direction: column;
            grid-template-columns: repeat(1fr);
            grid-template-rows: repeat(3, 100%);
            padding: 0;
        }
    }
`