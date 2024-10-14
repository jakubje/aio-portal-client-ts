import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TransactionsApiResponse } from '../types/TransactionSchema';

interface FetchTransactionsArgs {
  limit: number;
  offset: number;
}

interface FetchTransactionsByAccountArgs {
  symbol: string;
  limit: number;
  offset: number;
}

export const fetchTransactionsByAccount = createAsyncThunk<TransactionsApiResponse, FetchTransactionsArgs, { rejectValue: string }>(
  'transactions/fetchByAccount',
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          offset: offset,
          limit: limit,
        },
      };

      const { data } = await axios.get<TransactionsApiResponse>(`${process.env.REACT_APP_API_URL}/list_transactions`, config);

      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

export const fetchTransactionsByAccountByCoin = createAsyncThunk<
  TransactionsApiResponse,
  FetchTransactionsByAccountArgs,
  { rejectValue: string }
>('transactions/fetchByAccountAndCoin', async ({ symbol, limit, offset }, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        symbol: symbol,
        offset: offset,
        limit: limit,
      },
    };

    const { data } = await axios.get<TransactionsApiResponse>(`${process.env.REACT_APP_API_URL}/list_transactions`, config);

    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});
