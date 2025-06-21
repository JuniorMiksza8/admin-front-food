import styled from 'styled-components';

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

export const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const LogoIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 15px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

export const Title = styled.h1`
  color: #1f2937;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 16px;
  margin: 0 0 30px 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #374151;
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Button = styled.button<{ $loading?: boolean }>`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  ${props => props.$loading && `
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin: -10px 0 0 -10px;
      border: 2px solid transparent;
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  `}

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 10px;
`;

export const ForgotPassword = styled.a`
  color: #6366f1;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

export const DemoCredentials = styled.div`
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #0369a1;
`;

export const DemoButton = styled.button`
  background: none;
  border: none;
  color: #0369a1;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
  margin-top: 5px;
  padding: 0;

  &:hover {
    color: #0284c7;
  }
`;
