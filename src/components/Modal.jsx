import React from 'react';
import styled from "styled-components";

const Box = styled.section`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
`;

const Image = styled.img`
    margin: 10vh;
    height: 80vh;
    object-fit: scale-down;
`;

const Close = styled.span`
    position: absolute;
    top: 5vh;
    right: 5vh;
    font-weight: 900;
    font-size: 36px;
    color: #fff;
    cursor: pointer;
`;

export default function Modal() {
    const closeModal = (e) => {
        if (e.target.id === 'modal-img') return;

        document.querySelector('.modal').style.display = 'none';
        document.querySelector('#modal-img').src = '';
        document.querySelector('#modal-img').alt = '';
    }

    return (
        <Box className="modal" onClick={closeModal}>
            <Close id="modal-close" onClick={closeModal}>&times;</Close>
            <Image id="modal-img" alt=""/>
        </Box>
    );
}
