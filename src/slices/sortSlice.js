import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        type: 'none',
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export const { setValue, setType } = sortSlice.actions;

export default sortSlice.reducer;
