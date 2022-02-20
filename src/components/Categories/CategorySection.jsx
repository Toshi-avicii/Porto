import React from 'react';
import styled from 'styled-components';
import Category from './Category';

const categories = [
    {
        id: 'c1',
        img: 'https://reactstorefronts.com/static/img/categories/1.jpg',
        title: 'Electronics'
    },
    {
        id: 'c2',
        img: 'https://reactstorefronts.com/static/img/categories/2.jpg',
        title: 'Clothing'
    },
    {
        id: 'c3',
        img: 'https://reactstorefronts.com/static/img/categories/3.jpg',
        title: 'Computers'
    },
    {
        id: 'c4',
        img: 'https://reactstorefronts.com/static/img/categories/4.jpg',
        title: 'Home & Kitchen'
    },
    {
        id: 'c5',
        img: 'https://reactstorefronts.com/static/img/categories/5.jpg',
        title: 'Health & Beauty'
    },
    {
        id: 'c6',
        img: 'https://reactstorefronts.com/static/img/categories/6.jpg',
        title: 'Jewelry & Watch'
    },
    {
        id: 'c7',
        img: 'https://reactstorefronts.com/static/img/categories/7.jpg',
        title: 'Technology Toys'
    },
    {
        id: 'c8',
        img: 'https://reactstorefronts.com/static/img/categories/8.jpg',
        title: 'Smart Phones'
    }
];

function CategorySection() {
    return (
        <Container>
            <div className="heading">
                <h2>Top Categories of the month</h2>
            </div>

            {categories.map(cat => {
                return <Category key={cat.id} title={cat.title} img={cat.img} />
            })}
        </Container>
    )
}

export default CategorySection;

const Container = styled.div`
    padding: 1.5rem 3rem;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 2rem;

    .heading {
        padding: 1rem;    
        grid-column: 1 /span 6;

        @media (max-width: 1324px) {
            grid-column: 1 /span 3;
        }

        @media (max-width: 768px) {
            grid-column: 1 /span 2;
        }

        @media (max-width: 576px) {
            grid-column: 1 /span 1;
        }

        h2 {
            font-weight: 400;
            text-transform: capitalize;
        }
    }

    @media (max-width: 1324px) {
        grid-template-rows: repeat(4, auto);
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        padding: 1rem 1.5rem;
        grid-template-rows: repeat(5, auto);
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-rows: repeat(9, auto);
        grid-template-columns: repeat(1, 1fr);
    }
`
