import React from 'react'
import styled from 'styled-components';


function ImgSection(props) {
    const { imgs } = props;

    const brands = imgs.map(img => {
        return (
            <div className="brand-img" key={img.id}>
                <img src={img.img} alt="img" />
            </div>
        )
    });

    return (
        <Container>
            { brands }
        </Container>
    )
}

export default ImgSection;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin: 1.5rem 0;

    .brand-img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        
        .brand-img {
            margin: 1rem;
        }
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);

        .brand-img {
            margin: 0.5rem;
        }
    }
`