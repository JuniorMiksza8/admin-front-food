import styled from 'styled-components';

export const AnalyticsContainer = styled.div`
  display: grid;
  gap: 24px;
  animation: fadeIn 0.6s ease-out;
`;

export const PageHeader = styled.div`
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
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

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

export const Card = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: 24px;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
    h3 {
      font-size: 18px;
      font-weight: 600;
      color: var(--text-primary);
    }
  }
`;

export const ChartPlaceholder = styled.div`
  height: 300px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 14px;
  border: 2px dashed var(--border-color);
  text-align: center;
  flex-direction: column;
  gap: 8px;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`;

export const MetricCard = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  text-align: center;
  
  .metric-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
  }
  
  .metric-label {
    font-size: 12px;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .metric-change {
    font-size: 12px;
    margin-top: 8px;
    
    &.positive {
      color: var(--success-color);
    }
    
    &.negative {
      color: var(--error-color);
    }
  }
`;
