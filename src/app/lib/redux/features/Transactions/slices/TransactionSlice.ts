import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction, TransactionsSchema } from '../types/TransactionSchema';

const initialState: TransactionsSchema = {
  data: [],
  isLoading: false,
  error: null,
  lastFetched: null,
  total: 0,
};

const TransactionSlice = createSlice({
  name: 'Transactions',
  initialState,
  reducers: {
    setTransactionsData: (state, action: PayloadAction<Transaction[]>) => {
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
