import React, { useEffect } from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Newsletter from '../components/Newsletter';

const members = [
    {
        id: 'm1',
        image: '/assets/member-1.jpg',
        name: 'Robert Downey Jr.',
        position: 'CEO Founder'
    },
    {
        id: 'm2',
        image: '/assets/member-2.jpg',
        name: 'Robert Downey Jr.',
        position: 'CEO Founder'
    },
    {
        id: 'm3',
        image: '/assets/member-3.jpg',
        name: 'Robert Downey Jr.',
        position: 'CEO Founder'
    },
    {
        id: 'm4',
        image: '/assets/member-4.jpg',
        name: 'Robert Downey Jr.',
        position: 'CEO Founder'
    },
    {
        id: 'm5',
        image: '/assets/member-5.jpg',
        name: 'Robert Downey Jr.',
        position: 'CEO Founder'
    },
    {
        id: 'm6',
        image: '/assets/member-6.jpg',
        name: 'Robert Downey Jr.',
        position: 'CEO Founder'
    },
    {
        id: 'm7',
        image: '/assets/member-7.jpg',
        name: 'Robert Downey Jr.',
        position: 'CEO Founder'
    }
];

function AboutPage() {
    useEffect(() => {
        document.title = 'About Us | Porto';
    }, []);

    const settings = {
        dots: false,
        arrows: false,
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
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
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

    return (
        <Container>
            <FeaturedImage>
                <img width="100%" height="100%" alt="about-us" src="/assets/about-us.jpg" />
            </FeaturedImage>
            <Content>
                <div className="heading">
                        <h2>Meet Our Leaders</h2>
                </div>
                <Team>
                    {members.map(member => 
                        <Member key={member.id}>
                            <img src={member.image} alt="member" />

                            <div className="bio">
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>

                                <div className="icons">
                                    <p>
                                        <i className="fab fa-facebook-f"></i>
                                    </p>
                                    <p>
                                        <i className="fab fa-twitter"></i>
                                    </p>
                                    <p>
                                        <i className="fab fa-linkedin"></i>
                                    </p>
                                </div>
                            </div>
                        </Member>
                    )}
                </Team>
            </Content>
            <Awards>
                <Text>
                    <h1>Awards & Recognition</h1>
                    <p>Industry leaders and influencers recognize Overstock as one of the most trust worthy retail companies in the U.S., 
                    ranking high for both customer and employee satisfaction.
                    </p>
                </Text>

                <Slider {...settings} className="slider">
                    <div className="brand-item">
                        <img src="/assets/brand-1.png" alt="brand" />
                    </div>
                    <div className="brand-item">
                        <img src="/assets/brand-2.png" alt="brand" />
                    </div>
                    <div className="brand-item">
                        <img src="/assets/brand-3.png" alt="brand" />
                    </div>
                    <div className="brand-item">
                        <img src="/assets/brand-4.png" alt="brand" />
                    </div>
                    <div className="brand-item">
                        <img src="/assets/brand-5.png" alt="brand" />
                    </div>
                </Slider>
            </Awards>
            
            <Newsletter />
        </Container>
    )
}

export default AboutPage;

const Container = styled.div``

const FeaturedImage = styled.div`
    width: 100%;
    height: 500px;

    @media (max-width: 576px) {
        height: 300px;
    }

    img {
        object-fit: cover;
    }
`

const Content = styled.div`
    padding: 4rem;
    margin: 1rem 0;

    .heading {

        h2 {
            font-size: 2.5rem;
            font-weight: 400;
            text-align: center;
        }
    }

    @media (max-width: 992px) {
        padding: 0 2rem;
    }
`

const Team = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 2rem 0;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
    }
`

const Member = styled.div`
    margin: 1rem 0;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .bio {
        position: absolute;
        left: 0;
        bottom: -100%;
        width: 270px;
        height: 270px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 1rem 0.5rem;

        p {
            margin-top: 1rem;
        }

        .icons {
            display: flex;
            align-items: center;

            p {
                padding: 1rem 0;

                i {
                    font-size: 25px;
                    padding: 0 1rem;
                }

                i:nth-child(1) {
                    padding-left: 0;
                }

                i:nth-child(3) {
                    padding-right: 0;
                }
            }
        }
    }

    &:hover .bio {
        bottom: 0;
        transition: 0.5s;
    }
`

const Awards = styled.div`
    padding: 4rem;
    margin: 1rem 0;
    margin-bottom: 2rem;
    background: #f1f1f1;

    .slider {

        margin: 2rem 0;

        .slick-slide {

            .brand-item {
                display: flex !important;
                justify-content: center;
                align-items: center;
    
                img {
                    width: 150px;
                    height: 50px;
                    margin-bottom: 2rem;
                }
            }
        }
    }

    @media (max-width: 992px) {
        padding: 2rem 2rem 0 2rem;
    }
`

const Text = styled.div`

    margin-bottom: 2rem 0;
    text-align: center;

    h1 {
        font-weight: 400;
        font-size: 3rem;
        margin-bottom: 2rem;

        @media (max-width: 576px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.25rem;
        margin-bottom: 2rem;

        @media (max-width: 576px) {
            text-align: justify;
            line-height: 35px;
        }
    }
`