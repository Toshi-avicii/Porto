import React from 'react';
import styled from 'styled-components';

const offerArray = [
    {
        id: 'o1',
        spanClass: 'lnr-rocket',
        title: 'Free Delivery',
        description: 'For all oders over $99'
    },
    {
        id: 'o2',
        spanClass: 'lnr-sync',
        title: '90 Days Return',
        description: 'If goods have problems'
    }, 
    {
        id: 'o3',
        spanClass: 'lnr-laptop-phone',
        title: 'Secure Payment',
        description: '100% secure payment'
    },
    {
        id: 'o4',
        spanClass: 'lnr-bubble',
        title: '24/7 Support',
        description: 'Dedicated support'
    },
    {
        id: 'o5',
        spanClass: 'lnr-gift',
        title: 'Gift Service',
        description: 'Support gift service'
    }
];

function OfferItem() {
    return (
        <Container>
            <ul>
                {offerArray.map(item => (
                    <li key={item.id}>
                        <div className="icon-container">
                            <span className={`lnr ${item.spanClass}`} />
                        </div> 
                        <div className="text-container">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default OfferItem;


const Container = styled.div`

    border: 1px solid lightgrey;
    padding: 1.75rem 2.5rem;
    margin-bottom: 1rem;

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(5, 1fr);

        li {

            .icon-container {

                margin-bottom: 10px;

                span {
                    font-size: 2.6rem;
                    color: #ff595e;
                    font-weight: 500;
                }

                @media (max-width: 576px) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            .text-container {
                h2 {
                    font-weight: 500;
                    font-size: 1.25rem;
                }

                p {
                    font-weight: 300;
                }

                @media (max-width: 576px) {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: column;
                    margin-left: 25px;
                }
            }

            @media (max-width: 992px) {
                margin: 1rem 0;
            }

            @media (max-width: 450px) {
                display: flex;
                justify-content: center;
                padding-left: 10px;
                width: 100%;
            }
        }

        @media (max-width: 1076px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 576px) {
            grid-template-columns: repeat(1, 1fr);
            place-items: center;
        }
    }

    @media (max-width: 576px) {
        padding: 1rem;
    }
`