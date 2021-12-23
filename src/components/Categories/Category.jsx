import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Category(props) {
    const { img, title } = props;

    return (
        <Container>
            <Link to="/shop">
                <div className="category">
                    <img src={img} alt={title} />
                    <p>{title}</p>
                </div>
            </Link>
        </Container>
    )
}

export default Category;


const Container = styled.div`
    a {
        text-decoration: none;
        color: grey;

        .category {
            border: 1px solid lightgrey;
            padding: 1rem;
            margin: 0 1rem;
            transition: 0.25s;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            p {
                text-align: center;
            }
        }

        &:hover .category {
            border: 1px solid #ff595e;
            box-shadow: 0px 0px 16px lightgrey;
        }

        &:hover .category p {
            color: #ff595e;
        }
    }
`