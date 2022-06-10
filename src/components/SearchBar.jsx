import React from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { setValue, setType } from '../slices/searchSlice';

const Input = styled.input`
    max-width: 250px;
`;

export default function SearchBar() {
    const dispatch = useDispatch()

    const search = (e) => {
        dispatch(setValue(e.target.value));
    };

    const changeType = (e) => {
        dispatch(setType(e.target.value));
    };

    return (
        <div>
            <label htmlFor="filter">Search: </label>
            <Input id="filter" type="text" onChange={search}/>
            <select id="search-type" onChange={changeType}>
                <option value="title">Title</option>
                <option value="desc">Description</option>
            </select>
        </div>
    );
}
