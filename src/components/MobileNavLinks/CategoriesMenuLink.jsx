import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import { Transition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { mobileMenuActions } from '../../store/menuSlice';
import CategoryDropdown from '../CategoryDropdown';

function CategoriesMenuLink() {

    const dispatch = useDispatch();
    const categoriesSidebar = useRef();
    const categoriesSidebarState = useSelector(state => state.mobileMenu.shopSidebar);
    const [sidebarState, setSidebarState] = useState(false);

    useEffect(() => {
        if(categoriesSidebarState) {
            setSidebarState(true);
        }

        if(!categoriesSidebarState) {
            setSidebarState(false);
        }
    }, [categoriesSidebarState, sidebarState]);

    const defaultStyles = {
        transform: 'translateX(-100%)',
        overflow: 'scroll'
    }

    const transitionStyles = {
        entered: { transform: 'translateX(0%)'},
    }

    const closeMenuHandler = () => {
        dispatch(mobileMenuActions.closeCategoriesSidebar());
    }

    const content = (
        <Transition
         in={sidebarState}
         timeout={25} 
         nodeRef={categoriesSidebar}
         mountOnEnter 
         unmountOnExit
        >
            {state => 
                <Container 
                 ref={categoriesSidebar}
                 style={ {...defaultStyles , ...transitionStyles[state]} } 
                >
                    <div className="menu-header">
                        <h2>CATEGORIES</h2>
                        <button className="close-btn" onClick={closeMenuHandler}>
                            <CloseOutlined style={{ fontSize: '16px', padding: 0 }} />
                        </button>
                    </div>
                    <CategoryDropdown mobileDropdown />
                </Container>
            }
        </Transition>
    )

    return ReactDOM.createPortal(content, document.getElementById("sidebar"));
}

export default CategoriesMenuLink;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: white;
    box-shadow: 0px 0px 12px lightgrey;
    z-index: 15;
    display: none;
    transition: all 0.5s ease-out;

    .menu-header {
        background: #ff595e;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        position: relative;

        button {
            position: fixed;
            top: 10px;
            right: 10px;
            border: none;
            background: white;
            padding: 5px;
            padding-bottom: 0px;
            border-radius: 4px;
        }
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
        align-items: flex-start;

        li {
            width: 100%;
            padding: 1rem;

            &:hover {
                background: #ff595e;
                color: white;
                transition: 0.25s;
            }
        }
    }

    @media (max-width: 992px) {
        display: block;
        width: 400px;
    }

    @media (max-width: 576px) {
        width: 75%;
    }
`