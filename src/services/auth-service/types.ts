export interface User {
  userId: number;
  email: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  userId: number;
  email: string;
  name: string;
  permissions: string[];
}

export interface RefreshRequest {
  refreshToken: string;
}

export interface ApiError {
  status: string;
  code: string;
  message: string;
  timestamp: string;
  path: string;
  details?: Record<string, string>;
}
