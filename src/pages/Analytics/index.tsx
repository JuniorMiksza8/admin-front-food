import React from 'react';
import { BarChart3 } from 'lucide-react';
import styled from 'styled-components';

const AnalyticsContainer = styled.div`
  display: grid;
  gap: var(--space-6);
  animation: fadeIn 0.6s ease-out;
`;

const PageHeader = styled.div`
  background: var(--gradient-secondary);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  color: white;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-6);
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-full);
  }
  
  .header-content {
    position: relative;
    z-index: 1;
    
    h1 {
      font-size: var(--text-4xl);
      font-weight: var(--font-bold);
      margin-bottom: var(--space-2);
      color: white;
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }
    
    p {
      font-size: var(--text-lg);
      opacity: 0.9;
      color: white;
      line-height: var(--leading-relaxed);
    }
  }
`;

const PlaceholderCard = styled.div`
  background: var(--bg-surface);
  border-radius: var(--radius-2xl);
  padding: var(--space-12);
  text-align: center;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  
  .icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--space-4);
    background: var(--gradient-secondary);
    border-radius: var(--radius-2xl);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    
    svg {
      width: 40px;
      height: 40px;
    }
  }
  
  h2 {
    color: var(--text-primary);
    margin-bottom: var(--space-2);
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
  }
  
  p {
    color: var(--text-secondary);
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
  }
`;

const Analytics: React.FC = () => {
  return (
    <AnalyticsContainer>
      <PageHeader>
        <div className="header-content">
          <h1>
            <BarChart3 size={32} />
            Análises Avançadas
          </h1>
          <p>Visualize métricas detalhadas e insights do seu negócio</p>
        </div>
      </PageHeader>
      
      <PlaceholderCard>
        <div className="icon">
          <BarChart3 />
        </div>
        <h2>Página de Análises</h2>
        <p>Esta página será implementada com gráficos e métricas detalhadas</p>
      </PlaceholderCard>
    </AnalyticsContainer>
  );
};

export default Analytics;
