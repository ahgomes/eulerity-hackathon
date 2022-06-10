import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: '',
        type: 0,
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
        setType: (state, action) => {
            state.type = (action.payload === 'title') ? 0 : 1;
        },
    },
});

export const { setValue, setType } = searchSlice.actions;

export default searchSlice.reducer;
