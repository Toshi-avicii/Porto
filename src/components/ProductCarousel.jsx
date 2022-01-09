import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import ProductItem from './ProductItem';
import useFetchData from '../hooks/useFetchData';

function ProductCarousel(props) {
    const { data, loading } = useFetchData('', 6);

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    const products = data.map(item => {

        return <ProductItem 
         key={item.id} 
         img={item.images[0]}
         title={item.title}
         price={item.price}
         prevPrice={item.prevPrice}
         discount={item.discount}
         id={item.id}
         rating={item.rating}
         categories={item.categories}
         description={item.description}
        />
    });

    return (
        <Container>
            <div className="heading">
                <h2>{props.heading ? props.heading: "Deal of the day"}</h2>
                {props.viewAll && <h4>View all</h4>}
                <hr />
            </div>
                {loading ? <Slider {...settings}>
                    <Product>
                        <Skeleton width={250} height={200} />
                        <Skeleton width={200} height={16}  className="skeleton" />
                        <Skeleton width={100} height={16} className="skeleton" />
                        <Skeleton width={200} height={16}  className="skeleton" />
                        <Skeleton width={200} height={16}  className="skeleton" />
                    </Product>
                    <Product>
                        <Skeleton width={250} height={200} />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={100} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                    </Product>
                    <Product>
                        <Skeleton width={250} height={200} />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={100} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                    </Product>
                    <Product>
                        <Skeleton width={250} height={200} />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={100} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                    </Product>
                    <Product>
                        <Skeleton width={250} height={200} />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={100} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                    </Product>
                    <Product>
                        <Skeleton width={250} height={200} />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={100} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                        <Skeleton width={200} height={16} className="skeleton" />
                    </Product>
                </Slider> : 
                <Slider {...settings}>
                    {products}
                </Slider>
                }
        </Container>
    )
}

export default ProductCarousel;

const Container = styled.div`
    padding: 1.5rem 3rem;

    .heading {
        display: grid;
        grid-template-rows: repeat(2, auto);
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1rem;
        width: 100%;

        h2 {
            font-weight: 400;
        }

        h4 {
            text-align: right;
            font-weight: 400;
            border-bottom: 1px solid black;
            display: inline;
            width: 60px;
            margin-left: auto;
        }
        
        hr {
            border: 1px solid lightgrey;
            grid-column: 1 / span 2;
        }
    }

    .slick-list {
        overflow: hidden;
    }

    .slick-slider .slick-arrow {
        z-index: 5;
    }

    .slick-prev {
        left: 20px;

        @media (max-width: 576px) {
            left: 0px;
        }
    }

    .slick-next {
        right: 20px;

        @media (max-width: 576px) {
            right: 0px;
        }
    }

    .slick-prev:before, .slick-next:before {
        font-size: 30px;
        color: #ff595e;
    }

    .slick-dots {
        position: static;
    }

    .slick-dots li button:before {
        color: #ff595e;
        font-size: 12px;
    }

    .slick-dots li.slick-active button:before {
        color: red;
    }

    @media (max-width: 576px) {
        padding: 1rem 1.5rem;
    }
`

const Product = styled.div`
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
        width: 100%;
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

    .skeleton {
        margin-top: 10px;
    }
`
