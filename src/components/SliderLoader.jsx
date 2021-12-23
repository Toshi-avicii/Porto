import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

function SliderLoader(props) {
  let items = [];

  for(let i = 1; i <= Math.ceil(props.loadingScreens); i++) {
    items.push(i);
  }

  const loadingScreens = items.map(item => {
    return (
      <Product key={item}>
        <Skeleton width={250} height={200} />
        <Skeleton width={200} height={16}  className="skeleton" />
        <Skeleton width={100} height={16} className="skeleton" />
        <Skeleton width={200} height={16}  className="skeleton" />
        <Skeleton width={200} height={16}  className="skeleton" />
      </Product>
    )
  })

    return (
         <Wrapper>
           {loadingScreens}
        </Wrapper>
    )
}

export default SliderLoader;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
    }

    @media (max-width: 635px) {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 2rem;
    }
`
const Product = styled.div`
    display: flex !important;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 768px) {
      margin: 1rem 0;
    }

    @media (max-width: 576px) {
      justify-content: center;
      align-items: center;
    }

    .skeleton {
      margin-top: 10px;
    }
`