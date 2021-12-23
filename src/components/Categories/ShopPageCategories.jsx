import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ShopPageCategories(props) {
    const { categories } = props;
    
    const category = categories.map(cat => {
        return (
            <div className="category" key={cat.id}>
                <div className="img-box">
                    <img src={cat.img} alt={cat.name} />
                </div>
                <div className="sub-categories">
                     <div className="heading">
                        <h2>{cat.name}</h2>
                     </div>
                     <div className="links">
                        {cat.categories.map(item => <p key={item}><Link to="/shop">{item}</Link></p>)}
                     </div>
                </div>
            </div>
        )
    })

    return (
        <Container>
            {category}
        </Container>
    )
}

export default ShopPageCategories;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    padding: 2rem;

    .category {
        display: flex;
        border: 1px solid lightgrey;
        margin: 10px 0;
        padding: 1rem 8px;

        .img-box {
            object-fit: cover;
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            
            img {
                width: 100px;
                height: 100px;
            }
        }

        .sub-categories {
            .heading {
                margin-bottom: 8px;
                h2 {
                    text-transform: capitalize;
                    font-weight: 400;
                    font-size: 19px;
                }
            }

            .links {
                a {
                    display: inline-block;
                    text-decoration: none;
                    color: black;
                    text-transform: capitalize;
                    margin: 0.25rem 0;
                    width: 100%;
                }

                a:hover {
                    transition: 0.25s;
                    color: #ff595e;
                }
            }
        }

        &:hover {
            border: 1px solid #ff595e;
            transition: 0.25s;
        }

        @media (max-width: 1200px) {
            display: none;
        }
    }
    
    @media (max-width: 1200px) {
        display: none;
    }
`
