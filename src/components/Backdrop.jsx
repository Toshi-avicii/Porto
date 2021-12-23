import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { mobileMenuActions } from '../store/menuSlice';

const Backdrop = props => {
  
  const dispatch = useDispatch();
  const menu = useSelector(state => state.mobileMenu.menuSidebar);
  const categories = useSelector(state => state.mobileMenu.shopSidebar);

  const closeSidebar = () => {
      if(menu) {
          dispatch(mobileMenuActions.closeMenuSidebar());
      }

      if(categories) {
        dispatch(mobileMenuActions.closeCategoriesSidebar());
      }
  }

  return ReactDOM.createPortal(
    <BackdropContainer onClick={closeSidebar}></BackdropContainer>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;

const BackdropContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 15;
`