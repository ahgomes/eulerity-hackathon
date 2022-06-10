import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Pet from './Pet.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setValue as setPets } from '../slices/petListSlice';

const baseURL = 'http://eulerity-hackathon.appspot.com/pets';

const Grid = styled.div`
    padding: 20px;
    text-align: center;
`;

export default function PetList() {
    const searchState = useSelector((state) => state.search);
    const petList = useSelector((state) => state.petList.value);
    const sortType = useSelector((state) => state.sort.type);
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get(baseURL).then((res) => dispatch(setPets(res.data)));
    }, []);

    let petElements = petList.map((p, i) => {
        return <Pet key={i} info={p}/>
    });

    petElements = petElements.filter((p) => {
        let filterProp = !searchState.type ? p.props.info.title
                : p.props.info.description;
        filterProp = filterProp.toLowerCase();

        return filterProp.includes(searchState.value.toLowerCase());
    });

    petElements = petElements.sort((a, b) => {
        let aInfo = a.props.info;
        let bInfo = b.props.info;

        switch (sortType) {
            case 'titleAscending':
                return aInfo.title.localeCompare(bInfo.title);
            case 'titleDescending':
                return bInfo.title.localeCompare(aInfo.title);
            case 'newest':
                return new Date(aInfo.created) - new Date(bInfo.created);
            case 'oldest':
                return new Date(bInfo.created) - new Date(aInfo.created);
            case 'none':
            default:
                return 0;
        }
    })

    return (
        <Grid>
            {petElements}
        </Grid>
    );
}
