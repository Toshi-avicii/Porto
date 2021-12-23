import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import ShopPageCategories from '../components/Categories/ShopPageCategories';
import ImgSection from '../components/ImgSection'; 
import ItemsContainer from '../components/Pagination/ItemsContainer';
import ProductCarousel from '../components/ProductCarousel';
import Newsletter from '../components/Newsletter';
import Divider from '../components/General/Divider';

const sectionImgs = [
    {img: 'assets/shop-section-1.jpg', id: 'img1'},
    {img: 'assets/shop-section-2.jpg', id: 'img2'},
    {img: 'assets/shop-section-3.jpg', id: 'img3'},
    {img: 'assets/shop-section-4.jpg', id: 'img4'},
    {img: 'assets/shop-section-5.jpg', id: 'img5'},
    {img: 'assets/shop-section-6.jpg', id: 'img6'},
    {img: 'assets/shop-section-7.jpg', id: 'img7'},
    {img: 'assets/shop-section-8.jpg', id: 'img8'}
];

const shopCategories = [
    {
        id: 'cat1',
        img: 'https://reactstorefronts.com/static/img/categories/shop/1.jpg',
        name: 'Clothing & Apparel',
        categories: ['accessories','kids fashion', 'bags', 'mens']
    },
    {
        id: 'cat2',
        img: 'https://reactstorefronts.com/static/img/categories/shop/2.jpg',
        name: 'garden & kitchen',
        categories: ['cookware','decoration', 'furniture', 'garden tools']
    },
    {
        id: 'cat3',
        img: 'https://reactstorefronts.com/static/img/categories/shop/3.jpg',
        name: 'consumer electronics',
        categories: ['air conditioners', 'audios & theaters', 'car electronics', 'office electronics']
    },
    {
        id: 'cat4',
        img: 'https://reactstorefronts.com/static/img/categories/shop/4.jpg',
        name: 'health & beauty',
        categories: ['equipments', 'hair care', 'perfumer', 'skin care']
    },
    {
        id: 'cat5',
        img: 'https://reactstorefronts.com/static/img/categories/shop/5.jpg',
        name: 'computer & technologies',
        categories: ['desktop PC', 'laptops', 'smartphones']
    },
    {
        id: 'cat6',
        img: 'https://reactstorefronts.com/static/img/categories/shop/6.jpg',
        name: 'jewelry & watches',
        categories: ['gemstones jewelry', "men's watches", "women's watches"]
    }, 
    {
        id: 'cat7',
        img: 'https://reactstorefronts.com/static/img/categories/shop/7.jpg',
        name: 'phone & accessories',
        categories: ['iphone 10', 'iphone x', 'samsung note 8']
    }, 
    {
        id: 'cat8',
        img: 'https://reactstorefronts.com/static/img/categories/shop/8.jpg',
        name: 'sport & outdoor',
        categories: ['freezer bun', 'fridge cooler', 'wine cabinets']
    }
];

function ShopPage() {
    useEffect(() => {
        document.title = 'Shop | Porto';
    }, []);

    return (
        <>
            <Carousel slide1="assets/shop-slider-img-1.jpg" slide2="assets/shop-slider-img-2.jpg" noText={true} />
            <ImgSection imgs={sectionImgs} />
            <ShopPageCategories categories={shopCategories} />
            <ProductCarousel heading="Best Sale Items" />
            <ProductCarousel heading="Recommended Items" />
            <ItemsContainer heading="All Products" />
            <Divider />
            <Newsletter />
        </>
    )
}

export default ShopPage;
