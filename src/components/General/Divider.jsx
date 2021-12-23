import React from 'react';
import styled from 'styled-components';

function Divider() {
    return (
        <Container>
            <hr />
        </Container>
    )
}

export default Divider;

const Container = styled.div`
    padding: 0 0 2rem 0;

    hr {
        border: 1px solid lightgrey;
    }
`
