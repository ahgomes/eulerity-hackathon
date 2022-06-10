import { createSlice } from '@reduxjs/toolkit';

export const petListSlice = createSlice({
    name: 'petList',
    initialState: {
        value: [],
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setValue } = petListSlice.actions;

export default petListSlice.reducer;
