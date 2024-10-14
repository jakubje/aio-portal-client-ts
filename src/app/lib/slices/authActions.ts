import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponse, LoginCredentials, RefreshTokenRequest, RegisterCredentials } from '../definitions';

const backendURL: string = 'http://0.0.0.0:8080/v1';

export const loginUser = createAsyncThunk<AuthResponse, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post<AuthResponse>(`${backendURL}/login_user`, { email, password }, config);

      // store user's token in local storage
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);

      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

export const registerUser = createAsyncThunk<void, RegisterCredentials, { rejectValue: string }>(
  'auth/register',
  async ({ email, name, last_name, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post(`${backendURL}/create_user`, { email, name, last_name, password }, config);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

export const fetchRefreshToken = createAsyncThunk<AuthResponse, RefreshTokenRequest, { rejectValue: string }>(
  'auth/refresh_token',
  async ({ refresh_token }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post<AuthResponse>(`${backendURL}/refresh_token`, { refresh_token }, config);

      // store user's token in local storage
      localStorage.setItem('access_token', data.access_token);
      // localStorage.setItem('refresh_token', data.refresh_token);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);
