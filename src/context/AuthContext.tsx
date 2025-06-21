import { LoginRequest, User } from '../services/auth-service/types';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { AuthContextType } from '../hooks/useAuth/types';
import authService from '../services/auth-service';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [permissions, setPermissions] = useState<string[]>([]);

  const handleForceLogout = () => {
    setUser(null);
    setPermissions([]);
  };

  const login = useCallback(async (credentials: LoginRequest) => {
    try {
      const response = await authService.login(credentials);
      setUser({
        email: response.email,
        userId: response.userId,
        name: response.name,
      });
      setPermissions(response.permissions);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }, []);

  useEffect(() => {
    // Listen for force logout events from axios interceptor

    window.addEventListener('auth:force-logout', handleForceLogout);

    // Check if user is already logged in
    const initializeAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          const storedUser = authService.getStoredUser();
          if (storedUser) {
            setUser(storedUser);
            // Optionally verify token with server
            try {
              const currentUser = await authService.getCurrentUser();
              setUser(currentUser);
            } catch (error) {
              console.error('Failed to verify user:', error);
              // If verification fails, clear stored data
              await authService.logout();
              setUser(null);
            }
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      }

      initializeAuth();

      // Cleanup event listener
      return () => {
        window.removeEventListener('auth:force-logout', handleForceLogout);
      };
    };
  }, []);

  const value: AuthContextType = {
    user,
    permissions,
    logout: handleForceLogout,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
