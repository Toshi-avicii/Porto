import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';  
import MobileMenu from './components/MobileMenu';
import MobileMenuLink from './components/MobileNavLinks/MobileMenuLink';
import CategoriesMenuLink from './components/MobileNavLinks/CategoriesMenuLink';
import { useSelector, useDispatch } from 'react-redux';
import Backdrop from './components/Backdrop';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import { getActiveUser } from './store/authSlice';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Divider from './components/General/Divider';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {

  const dispatch = useDispatch();

  const menuSidebarState = useSelector(state => state.mobileMenu.menuSidebar);
  const categoriesSidebarState = useSelector(state => state.mobileMenu.shopSidebar);
  const userEmail = useSelector(state => state.auth.userEmail);
  const userId = useSelector(state => state.auth.userId);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getActiveUser({
          userName: user.displayName,
          userEmail: user.email,
          userId: user.uid
        }));
      } else {
        console.log('no user found');
      }
    });
  }, [auth, dispatch]);

  const PrivateRoute = ({ children }) => {
    return !userEmail ? children : <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/account/login" element={<PrivateRoute><LoginPage /></PrivateRoute>} />
          <Route path="/account/register" element={<PrivateRoute><RegisterPage /></PrivateRoute>} />
          <Route path="/account/forgot-password" element={<PrivateRoute><ForgotPasswordPage /></PrivateRoute>} />
          {userId && 
            <Route path={`/account/${userId}`} element={<ProfilePage />} />
          }
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      <Divider />
      <Footer />
      <Divider />
      <Copyright />
      <MobileMenu />

      {(menuSidebarState || categoriesSidebarState) && <Backdrop />}

      {menuSidebarState && <MobileMenuLink />}
      {categoriesSidebarState && <CategoriesMenuLink />}
    </>
  );
}

export default App;
