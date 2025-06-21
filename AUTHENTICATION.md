# Authentication Implementation

This document describes the authentication system implemented in the AdminPro dashboard.

## Overview

The authentication system is built using React Context API, Axios HTTP client, and integrates with the Restaurant E-commerce Backend API. It provides secure JWT-based authentication with automatic token refresh, request/response interceptors, and proper error handling.

## Architecture

### Components Structure
```
src/
├── types/
│   └── auth.ts                 # TypeScript interfaces
├── config/
│   └── axios.ts                # Axios configuration with interceptors
├── services/
│   └── authService.ts          # Authentication service
├── context/
│   └── AuthContext.tsx         # React Context for auth state
├── components/
│   ├── LoginForm.tsx           # Login page component
│   ├── ProtectedRoute.tsx      # Route protection wrapper
│   └── ErrorBoundary.tsx       # Error handling component
└── hooks/
    ├── useClickOutside.ts      # Custom hook for dropdown
    └── useApi.ts               # Custom hooks for API calls
```

## Features

### 🔐 Secure Authentication
- JWT token-based authentication
- Automatic token refresh with Axios interceptors
- Secure token storage in localStorage
- Session persistence across browser refreshes
- Automatic retry of failed requests after token refresh

### 🌐 HTTP Client (Axios)
- Centralized API configuration
- Request/Response interceptors
- Automatic token attachment to requests
- Request/Response logging in development
- Configurable timeout and base URL
- Error handling with proper error messages

### 🎨 Modern UI/UX
- Glassmorphism design with backdrop blur
- Smooth animations and transitions
- Responsive design for all devices
- Loading states and error handling
- Demo credentials for easy testing

### 🛡️ Security Features
- Protected routes
- Automatic logout on token expiration
- Error boundary for graceful error handling
- Click outside to close dropdowns
- Secure API communication with interceptors

### 🔄 State Management
- React Context API for global auth state
- Persistent user session
- Loading states management
- Error state handling
- Force logout events from interceptors

## Environment Configuration

### Environment Variables
Create a `.env` file in the project root:
```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_API_TIMEOUT=10000
VITE_NODE_ENV=development
```

### Axios Configuration
The HTTP client is configured with:
- Base URL from environment variables
- Configurable timeout
- Automatic token attachment
- Request/Response logging in development
- Automatic token refresh on 401 errors

## API Integration

### Axios Interceptors

**Request Interceptor:**
- Automatically adds Bearer token to all requests
- Logs requests in development mode
- Handles request errors

**Response Interceptor:**
- Logs responses in development mode
- Automatically handles 401 errors
- Attempts token refresh and retries failed requests
- Dispatches logout events when refresh fails

### Supported Endpoints
- `POST /auth/login` - User authentication
- `POST /auth/refresh` - Token refresh
- `POST /auth/logout` - User logout
- `GET /auth/me` - Get current user info

## Usage

### Basic Authentication Flow

1. **Login Process**:
   ```typescript
   const { login } = useAuth();
   await login({ email, password });
   ```

2. **Check Authentication Status**:
   ```typescript
   const { isAuthenticated, user } = useAuth();
   ```

3. **Logout**:
   ```typescript
   const { logout } = useAuth();
   await logout();
   ```

### Making API Calls

**Using the API hooks:**
```typescript
import { useGet, usePost } from '../hooks/useApi';

// GET request
const { data, loading, error, get } = useGet('/users');

// POST request
const { data, loading, error, post } = usePost();
await post('/users', userData);
```

**Direct Axios usage:**
```typescript
import apiClient from '../config/axios';

const response = await apiClient.get('/users');
const userData = await apiClient.post('/users', data);
```

### Protected Routes
Wrap your components with `ProtectedRoute`:
```tsx
<ProtectedRoute>
  <YourComponent />
</ProtectedRoute>
```

## Demo Credentials

For testing purposes, use these demo credentials:
- **Email**: `admin@example.com`
- **Password**: `admin123`

The login form includes a "Click to fill automatically" button for convenience.

## Error Handling

### Authentication Errors
- Invalid credentials: Shows user-friendly error message
- Network errors: Displays connection error
- Token expiration: Automatic refresh attempt
- Refresh failure: Force logout with event dispatch

### Axios Error Handling
- Automatic retry for 401 errors after token refresh
- Proper error message extraction from API responses
- Development logging for debugging
- Error boundary for unexpected errors

### Error Boundary
Catches and displays any unexpected errors with a retry option.

## API Hooks

### useApi Hook
Generic hook for making API requests:
```typescript
const { data, loading, error, execute } = useApi<UserType>();
await execute({ method: 'GET', url: '/users' });
```

### Specific HTTP Method Hooks
```typescript
// GET requests
const { data, loading, error, get } = useGet<User[]>('/users');

// POST requests
const { data, loading, error, post } = usePost<User>();

// PUT requests
const { data, loading, error, put } = usePut<User>();

// DELETE requests
const { data, loading, error, delete: del } = useDelete();
```

## Customization

### Environment Configuration
Update `.env` file for different environments:
```env
# Development
VITE_API_BASE_URL=http://localhost:8080/api/v1

# Production
VITE_API_BASE_URL=https://api.yourapp.com/v1
```

### Axios Configuration
Modify `src/config/axios.ts` for custom settings:
```typescript
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value',
  },
});
```

### Styling
The authentication components use styled-components with CSS variables for easy theming:
```typescript
// Colors can be customized in GlobalStyles.ts
--color-primary: #6366f1;
--color-secondary: #8b5cf6;
```

## Security Considerations

### Token Storage
- Tokens are stored in localStorage for persistence
- Consider using httpOnly cookies for enhanced security in production
- Implement proper CSRF protection if using cookies

### Network Security
- Always use HTTPS in production
- Implement proper CORS configuration
- Add rate limiting on the backend
- Use environment variables for sensitive configuration

### Error Handling
- Never expose sensitive information in error messages
- Log authentication attempts for security monitoring
- Implement proper session timeout
- Use secure headers in production

## Development

### Running the Application
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup
1. Copy `.env.example` to `.env`
2. Update environment variables as needed
3. Ensure backend API is running

### Testing Authentication
1. Start the backend API server
2. Use the demo credentials to test login
3. Test logout functionality
4. Verify protected routes work correctly
5. Test automatic token refresh

## Production Deployment

### Environment Variables
```env
VITE_API_BASE_URL=https://your-production-api.com/api/v1
VITE_API_TIMEOUT=15000
VITE_NODE_ENV=production
```

### Security Checklist
- [ ] Use HTTPS
- [ ] Implement proper CORS
- [ ] Add rate limiting
- [ ] Use secure token storage
- [ ] Implement CSRF protection
- [ ] Add security headers
- [ ] Monitor authentication logs
- [ ] Set proper timeout values
- [ ] Use environment-specific configurations

## Troubleshooting

### Common Issues

1. **Login fails with network error**:
   - Check if backend API is running
   - Verify `VITE_API_BASE_URL` in `.env`
   - Check CORS settings
   - Verify network connectivity

2. **Token refresh fails**:
   - Verify refresh token endpoint
   - Check token expiration settings
   - Ensure proper error handling in interceptors
   - Check browser console for detailed errors

3. **User gets logged out unexpectedly**:
   - Check token expiration time
   - Verify automatic refresh logic in interceptors
   - Check for network connectivity issues
   - Review browser console for 401 errors

4. **API requests fail**:
   - Verify axios configuration
   - Check request/response interceptors
   - Ensure proper error handling
   - Check network tab in browser dev tools

### Debug Mode
Enable debug logging by checking browser console in development mode. Axios interceptors automatically log requests and responses.

### Environment Issues
- Ensure `.env` file exists and has correct values
- Restart development server after changing environment variables
- Check that environment variables are prefixed with `VITE_`

## Future Enhancements

- [ ] Two-factor authentication (2FA)
- [ ] Social login integration
- [ ] Remember me functionality
- [ ] Password reset flow
- [ ] Account lockout protection
- [ ] Session management dashboard
- [ ] Audit logging
- [ ] Role-based permissions UI
- [ ] Request caching with Axios
- [ ] Offline support
- [ ] Request retry logic
- [ ] API response caching

## Support

For issues or questions about the authentication system:
1. Check the troubleshooting section
2. Review the API documentation
3. Check browser console for errors
4. Verify network connectivity
5. Check axios request/response logs
6. Verify environment configuration
