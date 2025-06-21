import {
  Button,
  DemoButton,
  DemoCredentials,
  ErrorMessage,
  ForgotPassword,
  Form,
  Input,
  InputGroup,
  Label,
  LoginCard,
  LoginContainer,
  Logo,
  LogoIcon,
  Subtitle,
  Title,
} from './styles';
import React, { useState } from 'react';

import useAuth from '@/hooks/useAuth';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await login({ email, password });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setEmail('admin@example.com');
    setPassword('admin123');
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Implement forgot password functionality
    alert('Forgot password functionality will be implemented soon!');
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <LogoIcon>AP</LogoIcon>
          <Title>Welcome Back</Title>
          <Subtitle>Sign in to your admin dashboard</Subtitle>
        </Logo>

        <DemoCredentials>
          <strong>Demo Credentials:</strong>
          <br />
          Email: admin@example.com
          <br />
          Password: admin123
          <br />
          <DemoButton type="button" onClick={fillDemoCredentials}>
            Click to fill automatically
          </DemoButton>
        </DemoCredentials>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={isLoading}
              autoComplete="email"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={isLoading}
              autoComplete="current-password"
            />
          </InputGroup>

          <Button type="submit" disabled={isLoading} $loading={isLoading}>
            {isLoading ? '' : 'Sign In'}
          </Button>

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>

        <ForgotPassword href="#" onClick={handleForgotPassword}>
          Forgot your password?
        </ForgotPassword>
      </LoginCard>
    </LoginContainer>
  );
};
