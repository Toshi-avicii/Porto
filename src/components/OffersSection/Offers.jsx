import React from 'react';
import styled from 'styled-components';
import OfferItem from './OfferItem';

function Offers() {
    return (
        <Container>
            <OfferItem />
        </Container>
    )
}

export default Offers;

const Container = styled.div`
    padding: 1.5rem 3rem;

    @media (max-width: 576px) {
        padding: 1rem 1.5rem;
    }
`