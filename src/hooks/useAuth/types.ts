import { LoginRequest, User } from '../../services/auth-service/types';

export interface AuthContextType {
  user: User | null;
  permissions: string[];
  logout: () => void;
  login: (data: LoginRequest) => Promise<void>;
}
