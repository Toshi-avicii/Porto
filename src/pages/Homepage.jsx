import React from 'react'
import Carousel from '../components/Carousel';
import Offers from '../components/OffersSection/Offers';
import ProductCarousel from '../components/ProductCarousel';
import Banners from '../components/Banners';
import CategorySection from '../components/Categories/CategorySection';
import ProductsTab from '../components/ProductsTab';
import Newsletter from '../components/Newsletter';
import Divider from '../components/General/Divider';
import SecondBanners from '../components/SecondBanners';

function Homepage() {
  
    return (
        <>
          <Carousel slide1="assets/slider-1.jpg" slide2="assets/slider-2.jpg" noText={false} /> 
          <Offers />
          <ProductCarousel />
          <Banners />
          <CategorySection />
          <ProductsTab 
           heading="Consumer Electronics" 
           category1="New Arrivals" 
           category2="Best Sellers" 
           category3="Most Popular"
           category4="View All"
           btnsClassName="tab-1-btn"
          />
           <ProductsTab 
           heading="Clothings" 
           category1="New Arrivals" 
           category2="Best Sellers" 
           category3="Most Popular"
           category4="View All"
           btnsClassName="tab-2-btn"
          />
          <ProductsTab 
           heading="Gardening & Kitchen" 
           category1="New Arrivals" 
           category2="Best Sellers" 
           category3="Most Popular"
           category4="View All"
           btnsClassName="tab-3-btn"
          />
          <SecondBanners />
          <Divider />
          <Newsletter />
        </>
    )
}

export default Homepage;
