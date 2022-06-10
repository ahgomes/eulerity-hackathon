import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec } from '../slices/selectSlice';

const Box = styled.article`
    display: inline-block;
    width: 300px;
    height: 550px;
    padding: 10px ;
    margin: 10px 5px;
    text-align: left;
    overflow: hidden;
`;

const Desc = styled.p`
    max-width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const Image = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
`;

const DateText = styled.span`
    font-style: italic;
`;


export default function Pet(props) {
    const canSelect = useSelector((state) => state.select.selectable)
    const dispatch = useDispatch()


    const select = (e) => {
        if (!canSelect) {
            document.querySelector('.modal').style.display = 'block';
            const modalImg = document.querySelector('#modal-img')
            modalImg.src = props.info.url;
            modalImg.alt = props.info.title;
            return;
        }
        let classList = e.currentTarget.classList;
        classList.toggle('selected');
        if (classList.contains('selected')) dispatch(inc());
        else dispatch(dec());
    }

    let formatedDate = new Date(props.info.created).toLocaleString('en-us', {
        year: 'numeric', month: 'short', day: 'numeric' });

    return (
        <span className="wrapper" onClick={select} data-url={props.info.url} data-title={props.info.title}>
            <Box>
                <Image src={props.info.url} alt={props.info.title} />
                <h2>{props.info.title}</h2>
                <Desc>{props.info.description}</Desc>
                <DateText>{formatedDate}</DateText>
            </Box>
        </span>
    );
}
