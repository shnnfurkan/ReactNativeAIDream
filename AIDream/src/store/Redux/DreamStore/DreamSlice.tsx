import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dreamInfo: null,
};

export const DreamSlice = createSlice({
  name: 'dream',
  initialState,
  reducers: {
    setDreamInfo: (state, action) => {
      state.dreamInfo = action.payload;
    },
  },
});

export const { setDreamInfo } = DreamSlice.actions;

export default DreamSlice.reducer;