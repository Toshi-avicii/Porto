import React from 'react';
import styled from 'styled-components';

function CartTable(props) {
    return (
        <Container>
            <div className="first-box">
                <p>{props.headerRowContent.first}</p>
            </div>
            <div className="second-box">
                <p>{props.headerRowContent.second}</p>
            </div>
            <div className="third-box">
                <p>{props.headerRowContent.third}</p>
            </div>
            <div className="fourth-box">
                <p>{props.headerRowContent.fourth}</p>
            </div>
            <div className="fifth-box">
                <p>{props.headerRowContent.fifth}</p>
            </div>
        </Container>
    )
}

export default CartTable;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background: #f2f2f2;
    

    div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 1.2rem;
            text-transform: uppercase;
            font-weight: 600;
        }
    }

    div.first-box {
        flex: 2;
        justify-content: flex-start;
    }

    @media (max-width: 576px) {
        overflow-x: scroll;
        
        div.first-box {
            flex: 5;
            margin-right: 2rem;
        }

        div.second-box {
            min-width: 50%;
        }

        div.third-box {
            min-width: 50%;
        }

        div.fourth-box {
            min-width: 50%;
        }

        div.fifth-box {
            min-width: 50%;
        }
    }

`