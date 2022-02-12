import React, { useRef } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { mobileMenuActions } from '../store/menuSlice';
 
function SearchResults(props) {
    const searchRef = useRef(null);
    const transitionDuration = 300;
    const displayResults = useSelector(state => state.mobileMenu.searchDisplay);
    const dispatch = useDispatch();

    const defaultStyles = {
        transition: `all ${transitionDuration}ms ease-in-out`,
        opacity: 0,
        transform: 'translateY(150px)'
    }

    const transitionStyles = {
        entering: { opacity: 0, transform: 'translateY(50px)' },
        entered: { opacity: 1, transform: 'translateY(0px)' },
        exiting: { opacity: 0.5, transform: 'translateY(100px)' },
        exited: { opacity: 0, transform: 'translateY(100px)' }
    }

    const searchHandler = (e) => {
        dispatch(mobileMenuActions.displaySearchResults('display'))
    }

    return (
        <Transition
         in={displayResults} 
         timeout={transitionDuration} 
         nodeRef={searchRef} 
         mountOnEnter 
         >  
            {state => (
                <Container 
                    style={{ ...defaultStyles, ...transitionStyles[state] }} 
                    ref={searchRef}
                    onClick={searchHandler}
                >
                    {props.children}
                </Container>
            )}
        </Transition>
    )
}

export default SearchResults;

const Container = styled.div`
    overflow-y: scroll;
    position: absolute;
    height: 250px;
    top: 50px;
    left: 0;
    background: white;
    width: 100%;
    z-index: 100;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #ff595e;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .no-product {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    
    .result-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 6px;

        .result-img {
            padding: 1rem 0 0 1rem;
        }

        .result-name {
            a {
                color: black;
                padding-left: 1rem;
                z-index: 100;

                &:hover {
                    color: #ff595e;
                    transtion: 0.35s;
                }
            }
        }
    }
`