import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

const ErrorCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const ErrorTitle = styled.h1`
  color: #dc2626;
  font-size: 24px;
  margin-bottom: 16px;
`;

const ErrorMessage = styled.p`
  color: #6b7280;
  font-size: 16px;
  margin-bottom: 24px;
`;

const RetryButton = styled.button`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  }
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorCard>
            <ErrorTitle>Something went wrong</ErrorTitle>
            <ErrorMessage>
              {this.state.error?.message || 'An unexpected error occurred'}
            </ErrorMessage>
            <RetryButton onClick={this.handleRetry}>
              Try Again
            </RetryButton>
          </ErrorCard>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}
