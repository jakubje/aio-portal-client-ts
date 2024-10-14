import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Portfolio, PortfolioSchema } from '../types/PortfolioSchema';
import { fetchPortfolios } from './PortfolioActions';

const initialState: PortfolioSchema = {
  data: [],
  isLoading: false,
  error: null,
  lastFetched: null,
};

const PortfolioSlice = createSlice({
  name: 'Portfolios',
  initialState,
  reducers: {
    setPortfoliosData: (state, action: PayloadAction<Portfolio[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.data = action.payload.portfolios;
        state.isLoading = false;
        state.error = null;
        state.lastFetched = Date.now();
      })
      .addCase(fetchPortfolios.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | null;
      });
  },
});

export const { reducer: PortfoliosReducer, actions: PortfoliosActions } = PortfolioSlice;
