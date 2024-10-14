import { UUID } from 'crypto';
import { v4 as uuid } from 'uuid';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  name: string;
  last_name: string;
  password: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  last_name: string;
  password_changed_at: string;
  created_at: string;
}

export interface AuthResponse {
  session_id: UUID;
  access_token: string;
  access_token_expires_at: string;
  refresh_token: string;
  refresh_token_expires_at: string;
  user: UserResponse;
}

export interface User {
  id: string;
  email: string;
  name: string;
  last_name: string;
  password_changed_at: string;
  created_at: string;
}

export interface Portfolio {
  id: string;
  name: string;
}
export interface AuthState {
  loading: boolean;
  success: boolean;
  access_token: string | null;
  refresh_token: string | null;
  user: User | null;
  error: string | null;
}
