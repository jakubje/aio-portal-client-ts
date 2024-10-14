import { createSlice } from '@reduxjs/toolkit';
import { fetchRefreshToken, loginUser, registerUser } from './authActions';
import { AuthState, User } from '../definitions';

const access_token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null;

const refresh_token = localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') : null;

const initialState: AuthState = {
  loading: false,
  success: false,
  access_token: null, // JWT token
  refresh_token: null,
  user: null, // User data (optional)
  error: null, // Authentication error (if any)
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      state.loading = false;
      state.user = null;
      state.access_token = null;
      state.refresh_token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchRefreshToken.fulfilled, (state, action) => {
        state.access_token = action.payload.access_token;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
