import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Button(props) {
    if(props.to) {
        return (
            <Btn
            type={props.type} 
            bg={props.bg} 
            color={props.color} 
            padding={props.padding} 
            border={props.border} 
            rounded={props.rounded}
            fontSize={props.fontSize}
            hoverBg={props.hoverBg}
            >
                <Link to={props.to}>{props.title}</Link>
            </Btn>
        )
    }
        return (
            <Btn 
             type={props.type} 
             bg={props.bg} 
             color={props.color} 
             padding={props.padding} 
             border={props.border} 
             rounded={props.rounded}
             fontSize={props.fontSize}
             hoverBg={props.hoverBg}
             onClick={props.onClick}
            >
                {props.title}
            </Btn>
        )
}

export default Button;

const Btn = styled.button`
    background: ${props => props.bg ? props.bg : "black"};
    color: ${props => props.color ? props.color : "white"};
    padding: ${props => props.padding ? props.padding : "0px"};
    border: ${props => props.border ? props.border : "none"};
    border-radius: ${props => props.rounded ? props.rounded : "0px"};
    cursor: pointer;
    transition: 0.5s;
    font-size: ${props => props.fontSize ? props.fontSize : "16px"};

    &:hover {
        background: ${props => props.hoverBg ? props.hoverBg : '#000013'};
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`
