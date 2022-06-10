import { createSlice } from '@reduxjs/toolkit';

export const selectSlice = createSlice({
  name: 'select',
  initialState: {
    selectable: false,
    count: 0,
  },
  reducers: {
    toggle: (state) => {
      state.selectable = !state.selectable;
    },
    inc: (state) => {
        state.count++;
    },
    dec: (state) => {
        state.count--;
    },
    clear: (state) => {
        state.count = 0;
    }
  },
});

export const { toggle, inc, dec, clear } = selectSlice.actions;

export default selectSlice.reducer;
