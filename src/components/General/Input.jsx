import React from 'react';
import styled from 'styled-components';

function Input(props) {

    return (
        <>
            {props.type && 
                <Container
                 type={props.type}
                 placeholder={props.placeholder}
                 id={props.id}
                 padding={props.padding}
                 border={props.border}
                 width={props.width}
                ></Container>
            }

            {!props.type &&
                <Textarea 
                placeholder={props.placeholder}
                padding={props.padding}
                border={props.border}
                width={props.width}
                id={props.id}
                rows={props.rows}
               />
            }
        </>
    )
}

export default Input;

const Container = styled.input`

    width: ${props => props.width ? props.width : "50%"};
    padding: ${props => props.padding ? props.padding : "1"}rem;
    border: ${props => props.border ? props.border : "none"};
    margin-left: ${props => props.marginLeft ? props.marginLeft : "0"}
    margin-right: ${props => props.marginRight ? props.marginRight : "0"}
    margin-top: ${props => props.marginTop ? props.marginLeft : "0"}
    margin-bottom: ${props => props.marginBottom ? props.marginLeft : "0"}

    &:focus {
        border: none;
        outline: 1px solid #ff595e;
    }
`

const Textarea = styled.textarea`
    width: ${props => props.width ? props.width : "50%"};
    padding: ${props => props.padding ? props.padding : "1"}rem;
    border: ${props => props.border ? props.border : "none"};

    &:focus {
        border: none;
        outline: 1px solid #ff595e;
    }
`