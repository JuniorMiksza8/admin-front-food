import React from 'react';
import styled from 'styled-components';

const PlaceholderContainer = styled.div`
  display: grid;
  gap: 24px;
  animation: fadeIn 0.6s ease-out;
`;

const PageHeader = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  border-radius: var(--radius-xl);
  padding: 32px;
  color: white;
  position: relative;
  overflow: hidden;
  margin-bottom: 24px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(50px, -50px);
  }
  
  .header-content {
    position: relative;
    z-index: 1;
    
    h1 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
      color: white;
    }
    
    p {
      font-size: 16px;
      opacity: 0.9;
      color: white;
    }
  }
`;

const PlaceholderCard = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: 48px;
  text-align: center;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }
  
  h2 {
    color: var(--text-primary);
    margin-bottom: 8px;
  }
  
  p {
    color: var(--text-secondary);
  }
`;

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  pageType: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description,
  icon,
  gradient,
  pageType
}) => {
  return (
    <PlaceholderContainer>
      <PageHeader gradient={gradient}>
        <div className="header-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </PageHeader>
      
      <PlaceholderCard>
        <div className="icon">{icon}</div>
        <h2>Página de {pageType}</h2>
        <p>Esta página será implementada com funcionalidades específicas para {pageType.toLowerCase()}</p>
      </PlaceholderCard>
    </PlaceholderContainer>
  );
};

export default PlaceholderPage;
