import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  gap: var(--space-6);
  animation: fadeIn 0.6s ease-out;
`;

export const WelcomeSection = styled.div`
  background: var(--gradient-primary);
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
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-full);
  }
  
  .welcome-content {
    position: relative;
    z-index: 1;
    
    h1 {
      font-size: var(--text-4xl);
      font-weight: var(--font-bold);
      margin-bottom: var(--space-2);
      color: white;
      letter-spacing: -0.025em;
    }
    
    p {
      font-size: var(--text-lg);
      opacity: 0.9;
      margin-bottom: var(--space-6);
      color: white;
      line-height: var(--leading-relaxed);
    }
    
    .welcome-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: var(--space-8);
      margin-top: var(--space-6);
      
      .stat-item {
        .stat-number {
          font-size: var(--text-3xl);
          font-weight: var(--font-bold);
          margin-bottom: var(--space-1);
          line-height: var(--leading-tight);
        }
        
        .stat-label {
          font-size: var(--text-sm);
          opacity: 0.8;
          font-weight: var(--font-medium);
        }
      }
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-5);
  margin-bottom: var(--space-8);
`;

export const StatCard = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  color: white;
  position: relative;
  overflow: hidden;
  transition: all var(--transition-slow);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-2xl);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-full);
  }
  
  .stat-icon {
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-4);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  .stat-value {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    margin-bottom: var(--space-1);
    line-height: var(--leading-tight);
  }
  
  .stat-label {
    font-size: var(--text-base);
    opacity: 0.9;
    margin-bottom: var(--space-2);
    font-weight: var(--font-medium);
  }
  
  .stat-change {
    font-size: var(--text-sm);
    display: flex;
    align-items: center;
    gap: var(--space-1);
    opacity: 0.8;
    font-weight: var(--font-medium);
    
    .change-icon {
      width: 14px;
      height: 14px;
    }
  }
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-6);
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: var(--bg-surface);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-slow);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
    border-color: var(--border-dark);
  }
  
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-5);
    
    h3 {
      font-size: var(--text-xl);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
    }
    
    .card-actions {
      display: flex;
      gap: var(--space-2);
    }
  }
`;

export const ChartPlaceholder = styled.div`
  height: 320px;
  background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  font-size: var(--text-sm);
  border: 2px dashed var(--border-color);
  text-align: center;
  flex-direction: column;
  gap: var(--space-2);
  font-weight: var(--font-medium);
`;

export const ActivityList = styled.div`
  .activity-item {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--border-light);
    
    &:last-child {
      border-bottom: none;
    }
    
    .activity-avatar {
      width: 44px;
      height: 44px;
      border-radius: var(--radius-full);
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: var(--font-semibold);
      font-size: var(--text-sm);
      flex-shrink: 0;
      box-shadow: var(--shadow-md);
      border: 2px solid var(--bg-primary);
    }
    
    .activity-content {
      flex: 1;
      
      .activity-text {
        font-size: var(--text-sm);
        color: var(--text-primary);
        margin-bottom: var(--space-1);
        font-weight: var(--font-medium);
        line-height: var(--leading-snug);
      }
      
      .activity-time {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        font-weight: var(--font-medium);
      }
    }
    
    .activity-status {
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-md);
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      
      &.success {
        background: rgba(16, 185, 129, 0.1);
        color: var(--success-color);
        border: 1px solid rgba(16, 185, 129, 0.2);
      }
      
      &.warning {
        background: rgba(245, 158, 11, 0.1);
        color: var(--warning-color);
        border: 1px solid rgba(245, 158, 11, 0.2);
      }
      
      &.error {
        background: rgba(239, 68, 68, 0.1);
        color: var(--error-color);
        border: 1px solid rgba(239, 68, 68, 0.2);
      }
    }
  }
`;

export const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  margin-top: var(--space-5);
`;

export const ActionButton = styled.button<{ variant: string }>`
  padding: var(--space-4);
  border-radius: var(--radius-xl);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  transition: all var(--transition-normal);
  border: 1px solid transparent;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: var(--primary-color);
          color: white;
          box-shadow: var(--shadow-md);
          &:hover {
            background: var(--primary-600);
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
        `;
      case 'success':
        return `
          background: var(--success-color);
          color: white;
          box-shadow: var(--shadow-md);
          &:hover {
            background: #059669;
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
        `;
      case 'warning':
        return `
          background: var(--warning-color);
          color: white;
          box-shadow: var(--shadow-md);
          &:hover {
            background: #d97706;
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
        `;
      default:
        return `
          background: var(--bg-primary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          &:hover {
            background: var(--bg-secondary);
            color: var(--text-primary);
            border-color: var(--border-dark);
          }
        `;
    }
  }}
`;

export const ProgressBar = styled.div<{ progress: number; color: string }>`
  width: 100%;
  height: 8px;
  background: var(--gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin: var(--space-2) 0;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.progress}%;
    background: ${props => props.color};
    border-radius: var(--radius-full);
    transition: width var(--transition-slow);
  }
`;

export const ProgressSection = styled.div`
  margin-top: var(--space-5);
`;

export const ProgressItem = styled.div`
  margin-bottom: var(--space-4);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
  
  .progress-label {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    font-weight: var(--font-medium);
  }
  
  .progress-value {
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    color: var(--text-primary);
  }
`;
