import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PortfoliosApiResponse } from '../types/PortfolioSchema';

export const fetchPortfolios = createAsyncThunk<PortfoliosApiResponse, { rejectValue: string }>(
  'portfolios/fetchPortfolios',
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post<PortfoliosApiResponse>(`${process.env.REACT_APP_API_URL}/get_portfolios`, {}, config);

      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);
