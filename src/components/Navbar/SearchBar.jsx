import React from 'react';
import styled from 'styled-components';

function SearchBar() {
    return (
        <Search>
            <select>
                <option>All</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
            </select>
            <input type="text" placeholder="Search for anything" />
            <button>Search</button>
    </Search>
    )
}

export default SearchBar;

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

    button {
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