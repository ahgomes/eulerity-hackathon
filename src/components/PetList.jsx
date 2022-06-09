import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Pet from './Pet.jsx';

const baseURL = 'http://eulerity-hackathon.appspot.com/pets';

export const Grid = styled.div`
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: 50px 50px
    grid-gap: 10px
`;

export default function PetList() {
    const [pets, setPets] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((res) => setPets(res.data));
    }, []);

    if (!pets) return null;

    let petElements = pets.map((p, i) => {
        return <Pet key={i} info={p}/>
    });

    return (
        <Grid>
            {petElements}
        </Grid>
    );
}
