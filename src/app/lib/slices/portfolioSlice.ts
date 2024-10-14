import { createSlice } from '@reduxjs/toolkit';
import { Portfolio } from '../definitions';

const initialState: Portfolio = {
  id: '',
  name: '',
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    updatePortfolioId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { updatePortfolioId } = portfolioSlice.actions;
export default portfolioSlice.reducer;
