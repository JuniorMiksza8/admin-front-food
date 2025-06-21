import { ApiError, LoginRequest, LoginResponse, User } from './types';

import { AxiosError } from 'axios';
import apiClient from '../../config/axios';

class AuthService {
  constructor() {
    // Listen for logout events from axios interceptor
    window.addEventListener('auth:logout', this.handleForceLogout);
  }

  private handleForceLogout = () => {
    // This will be called when axios interceptor fails to refresh token
    this.clearTokens();
    // You can dispatch a custom event here to notify components
    window.dispatchEvent(new CustomEvent('auth:force-logout'));
  };

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
      const data = response.data;
      
      // Store tokens
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.accessToken); // Note: API doesn't return refresh token, using access token
      localStorage.setItem('user', JSON.stringify({
        userId: data.userId,
        email: data.email,
        name: data.name,
      }));

      return data;
    } catch (error) {
      console.error('Login error:', error);
      if (error instanceof AxiosError) {
        const apiError = error.response?.data as ApiError;
        throw new Error(apiError?.message || 'Login failed');
      }
      throw error;
    }
  }

  async refreshToken(): Promise<LoginResponse> {
    const refreshTokenValue = localStorage.getItem('refreshToken');
    if (!refreshTokenValue) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await apiClient.post<LoginResponse>('/auth/refresh', {
        refreshToken: refreshTokenValue,
      });
      
      const data = response.data;
      
      // Update tokens
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.accessToken);
      localStorage.setItem('user', JSON.stringify({
        userId: data.userId,
        email: data.email,
        name: data.name,
      }));

      return data;
    } catch (error) {
      console.error('Token refresh error:', error);
      this.clearTokens();
      if (error instanceof AxiosError) {
        const apiError = error.response?.data as ApiError;
        throw new Error(apiError?.message || 'Token refresh failed');
      }
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearTokens();
    }
  }

  async getCurrentUser(): Promise<User> {
    try {
      const response = await apiClient.get<User>('/auth/me');
      return response.data;
    } catch (error) {
      console.error('Get current user error:', error);
      if (error instanceof AxiosError) {
        const apiError = error.response?.data as ApiError;
        throw new Error(apiError?.message || 'Failed to get user info');
      }
      throw error;
    }
  }

  getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  private clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }
}

export default  new AuthService();
