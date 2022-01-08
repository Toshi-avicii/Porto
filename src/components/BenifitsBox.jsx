import React from 'react';
import styled from 'styled-components';

function BenifitsBox(props) {
    return (
        <Container height={props.height}>
            <div>
                <i className="fas fa-globe"></i>
                <p>Shipping worldwide</p>
            </div>
            <div>
                <i className="fas fa-exchange-alt"></i>
                <p>Free 7-day return if eligible, so easy</p>
            </div>
            <div>
                <i className="fas fa-money-bill"></i>
                <p>Supplier give bills for this product.</p>
            </div>
            <div>
                <i className="fas fa-credit-card"></i>
                <p>Pay online or when receiving goods</p>
            </div>
        </Container>
    )
}

export default BenifitsBox;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #e1e1e1;
    padding: 1.5rem;
    height: ${props => props.height ? props.height : "auto"};

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 0;

        i {
            font-size: 20px;
            display: block;
        }

        p {
            width: 80%;
            text-align: justify;
        }
    }
`