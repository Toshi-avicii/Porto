import React from 'react';
import styled from 'styled-components';

function Copyright() {
    return (
        <Container>
            <p><i className="fa fa-copyright"></i> 2021 Porto All rights reserved.</p>
        </Container>
    )
}

export default Copyright;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    @media (max-width: 992px) {
        margin-bottom: 3rem;
    }
`