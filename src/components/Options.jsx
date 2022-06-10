import React from 'react';
import SearchBar from './SearchBar.jsx';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { toggle, inc, clear } from '../slices/selectSlice';
import { setType } from '../slices/sortSlice';

const Container = styled.section`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #888;
    background: #fff;
    box-sizing: border-box;
    text-align: right;
`;

export default function Options() {
    const canSelect = useSelector((state) => state.select.selectable)
    const dispatch = useDispatch()

    const toggleSelect = () => {
        if (canSelect) {
            document.querySelectorAll('.selected').forEach((el) => {
                el.classList.remove('selected');
            });
            dispatch(clear());
        }
        dispatch(toggle());
    }

    const selectAll = () => {
        if (!canSelect) toggleSelect();
        dispatch(clear());
        document.querySelectorAll('.wrapper').forEach((el) => {
            el.classList.add('selected');
            dispatch(inc());
        });
    }

    const changeType = (e) => {
        dispatch(setType(e.target.value));
    };

    return (
        <Container className='options-section'>
            <button onClick={selectAll}>
                Select All
            </button>
            <button onClick={toggleSelect}>
                {!canSelect ? 'Select' : 'Clear'}
            </button>
            <div>
                <label htmlFor="sort-select">Sort: </label>
                <select id="sort-select" onChange={changeType}>
                    <option value="none">None</option>
                    <option value="titleAscending">Title: A-Z</option>
                    <option value="titleDescending">Title: Z-A</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
            <SearchBar/>
        </Container>
    );
}
