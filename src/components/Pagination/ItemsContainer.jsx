import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetchData from '../../hooks/useFetchData';
import ProductItem from '../ProductItem';
import SliderLoader from '../SliderLoader';

function ItemsContainer(props) {
    const { data, loading } = useFetchData();
    
    const [itemsPerPage] = useState(4);
    const [pageData, setPageData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumbeLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    useEffect(() => {
        setPageData(data);
    }, [data]);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);

        if(currentPage + 1 > maxPageNumbeLimit) {
            setMaxPageNumberLimit(maxPageNumbeLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);

        if((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumbeLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    const pages = [];

    for(let i = 1; i <= Math.ceil(pageData.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pageData.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map(num => {
        if(num < maxPageNumbeLimit + 1 && num > minPageNumberLimit) {
            return (
                <button 
                 key={num} 
                 id={num} 
                 onClick={handleClick} 
                 className={`pagination-btn ${currentPage === num ? "active" : null}`}>
                    {num}
                </button>
            )
        } else {
            return null;
        }
    });

    const renderData = (data) => {
        return (
            <>
            <div className="heading">
                <h2>{props.heading}</h2>
            </div>
            <hr />
            <div className="cards">
                {data.map(item => {
                    return <ProductItem 
                    key={item.id} 
                    img={item.images[0]}
                    title={item.title}
                    price={item.price}
                    prevPrice={item.prevPrice}
                    discount={item.discount}
                    id={item.id}
                    rating={item.rating}
                    categories={item.categories}
                   />
                })}
            </div>
            </>
        )
    } 

    return (
        <Container>

            {loading ? <SliderLoader loadingScreens={4} /> : renderData(currentItems)}

            <div className="page-buttons">
                <button onClick={handlePrevPage} disabled={currentPage === pages[0] ? true : false} className="next-btn">
                    <i className="fas fa-chevron-left"></i>
                </button>

                {renderPageNumbers}

                <button onClick={handleNextPage} disabled={currentPage === pages[pages.length - 1] ? true : false} className="prev-btn">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </Container>
    )
}

export default ItemsContainer;

const Container = styled.div`
    padding: 1.5rem 3rem;

    .heading {
        h2 {
            font-weight: 400;
            margin-bottom: 0.75rem;
        }
    }
    
    .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 1rem;
        margin: 1rem 0;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 635px) {
            grid-template-columns: repeat(1, 1fr);
            grid-column-gap: 2rem;
        }
    }

    .page-buttons {

        display: flex;
        justify-content: center;
        align-items: center;

        .next-btn, .prev-btn {
            border: 1px solid grey;
            border-radius: 2px;
            color: black;
            padding: 8px 14px;
            background: #f1f1f1;
            margin: 1rem 0.25rem;
            cursor: pointer;
        }

        
        .next-btn:disabled, .prev-btn:disabled {
            background: white;
            color: lightgrey;
            border: 1px solid lightgrey;
        }

        .pagination-btn {
            border: 1px solid lightgrey;
            border-radius: 2px;
            color: grey;
            font-size: 16px;
            padding: 8px 14px;
            background: #fff;
            margin: 1rem 0.25rem;
            cursor: pointer;
        }

        .pagination-btn.active {
            color: white;
            border: none;
            background: #000013;
        }
    }

    @media (max-width: 576px) {
        padding: 1rem 1.5rem;
    }

`