import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel(props) {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

    return (
        <Container>
            <Slider {...settings} style={{ overflow: 'hidden' }}>
                <Link to="/shop">
                    <SlideOne slide1={props.slide1}>
                        {!props.noText &&
                            <TextBox>
                                <h2>Happy Summer <br />Combo Super Cool <br />up to <span>40% Off</span></h2>
                                <button>Shop Now</button>
                            </TextBox>
                        }
                    </SlideOne>
                </Link>
                <Link to="/shop">
                    <SlideTwo slide2={props.slide2}>
                        {!props.noText &&
                            <TextBox>
                                <h2>Happy Summer <br />Combo Super Cool <br />up to <span>40% Off</span></h2>
                                <button>Shop Now</button>
                            </TextBox>
                        }
                    </SlideTwo>
                </Link>
            </Slider>
        </Container>
    )
}

export default Carousel;

const Container = styled.div`
    a {
        text-decoration: none;
        color: black;
    }

    .slick-list {
        overflow: hidden;
    }

    .slick-slider .slick-arrow {
        z-index: 5;
    }

    .slick-prev {
        left: 20px;
    }

    .slick-next {
        right: 20px;
    }

    .slick-prev:before, .slick-next:before {
        font-size: 30px;
        color: rgba(25,25,25, 0.65);
    }

    .slick-dots {
        position: static;
    }
`

const SlideOne = styled.div`
    width: 100vw;
    height: 300px;
    display: grid;
    grid-template-column: repeat(3, 1fr);
    background-image: url(${props => props.slide1});
    padding: 2rem 2rem 2rem 4rem;
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        height: 200px;
        padding: 1rem 1rem 2rem 2rem;
    }

    @media (max-width: 576px) {
        padding: 1rem;
        background-size: 160% 100%;
    }
`

const SlideTwo = styled(SlideOne)`
    background-image: url(${props => props.slide2});
`

const TextBox = styled.div`
    width: 40%;
    min-height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem;
    padding-left: 5rem;

    h2 {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 2.25rem;

        span {
            font-weight: bold;
            color: #ff595e;
        }

        @media (max-width: 1024px) {
            font-size: 1.5rem;
        }

        @media (max-width: 576px) {
            font-size: 1rem;
        }
    }

    button {
        background: #ff595e;
        border: none;
        padding: 0.85rem 4rem;
        cursor: pointer;
        color: white;
        margin-top: 20px;

        &:hover {
            background: black;
            transition: 0.5s;
        }

        @media (max-width: 768px) {
            padding: 0.45rem 1rem;
            margin-top: 10px;
        }
    }

    @media (max-width: 1024px) {
        padding: 1rem;
        padding-left: 1rem;
        width: 75%;
    }
`

