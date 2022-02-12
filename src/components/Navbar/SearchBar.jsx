import React, { useState } from 'react';
import styled from 'styled-components';
import useSearchData from '../../hooks/useSearchData';
import { Link } from 'react-router-dom';
import SearchResults from '../SearchResults';
import { useDispatch } from 'react-redux';
import { mobileMenuActions } from '../../store/menuSlice';

function SearchBar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const blurHandler = (e) => {
        dispatch(mobileMenuActions.displaySearchResults('not-display'));
    }

    const focusHandler = (e) => {
        dispatch(mobileMenuActions.displaySearchResults('display'));
    }

    const { loading, data } = useSearchData(search);

    let results;

    if(loading) {
        results = <p>Loading...</p>
    }

    if(!loading && data.length === 0) {
        results = <div className="no-product">
            <p>Search the store</p>
        </div>
    }

    if(data.length !== 0) {
        results = data.map(item => {
            return (
                <div className="result-box" key={item.id}>
                    <div className="result-img">
                       <img src={item.images[0]} alt={item.title} title={item.title} width="75" height="75" /> 
                    </div>
                    <div className="result-name">
                        <Link to={`/shop/${item.id}`}>{item.title}</Link>
                    </div>
                </div>
            )
        });
    }


    return (
        <Container className="search-box">
            <Search>
                <select>
                    <option>All</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
                <input type="search" placeholder="Search for anything" onFocus={focusHandler} onChange={searchHandler} onBlur={blurHandler} />
                <Link to={`/search?keyword=${search}`}>Search</Link>
            </Search>

            <SearchResults>
                {results}
            </SearchResults>
        </Container>
    )
}

export default SearchBar;

const Container = styled.div`
    height: 100%;
    position: relative;
`

const Search = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    select {
        border: none;
        outline: none;
        font-size: 1rem;
        min-height: 100%;
        border-right: 1px solid #000013;
        padding: 0 2.5rem 0 0.5rem;
        width: 150px;
        background: white;
    }

    input {
        padding-left: 0.55rem;
        width: 350px;
        border: none;
        outline: none;
        font-size: 0.95rem;
        min-height: 100%;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        min-height: 100%;
        border: none;
        padding: 0 2.25rem;
        font-weight: 600;
        color: white;
        background-color: #ff595e;
        cursor: pointer;

        &:hover {
            background-color: #f6f6f6;
            color: black;
            transition: 0.25s;
        }
    }

    @media (max-width: 992px) {
        display: none;
    }
`