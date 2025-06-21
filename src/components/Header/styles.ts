import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  padding: var(--space-4) var(--space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  backdrop-filter: blur(20px);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  flex: 1;
`;

export const PageTitle = styled.div`
  h1 {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.025em;
  }
  
  .breadcrumb {
    font-size: var(--text-sm);
    color: var(--text-tertiary);
    margin-top: var(--space-1);
    display: flex;
    align-items: center;
    gap: var(--space-2);
    
    span {
      &:not(:last-child)::after {
        content: '/';
        margin-left: var(--space-2);
        color: var(--text-muted);
      }
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  flex: 1;
  
  .search-input {
    width: 100%;
    padding: var(--space-3) var(--space-4) var(--space-3) var(--space-12);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xl);
    background: var(--bg-primary);
    font-size: var(--text-sm);
    transition: all var(--transition-normal);
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px var(--primary-50);
      background: var(--bg-primary);
    }
    
    &::placeholder {
      color: var(--text-tertiary);
    }
  }
  
  .search-icon {
    position: absolute;
    left: var(--space-4);
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-tertiary);
    width: 16px;
    height: 16px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  transition: all var(--transition-normal);
  white-space: nowrap;
  
  ${props => props.variant === 'primary' ? `
    background: var(--primary-color);
    color: white;
    box-shadow: var(--shadow-sm);
    
    &:hover {
      background: var(--primary-600);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }
    
    &:active {
      transform: translateY(0);
    }
  ` : `
    background: var(--bg-primary);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    
    &:hover {
      background: var(--bg-secondary);
      color: var(--text-primary);
      border-color: var(--border-dark);
    }
  `}
`;

export const NotificationButton = styled.button<{ hasNotifications?: boolean }>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--bg-secondary);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  .notification-icon {
    width: 18px;
    height: 18px;
    color: var(--text-secondary);
  }
  
  ${props => props.hasNotifications && `
    &::after {
      content: '';
      position: absolute;
      top: 6px;
      right: 6px;
      width: 8px;
      height: 8px;
      background: var(--error-color);
      border-radius: var(--radius-full);
      border: 2px solid var(--bg-primary);
      box-shadow: var(--shadow-sm);
    }
  `}
`;

export const ProfileDropdown = styled.div`
  position: relative;
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    padding: var(--space-2);
    min-width: 200px;
    z-index: var(--z-dropdown);
    margin-top: var(--space-2);
    backdrop-filter: blur(20px);
  }
  
  .dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-fast);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    
    &:hover {
      background: var(--bg-hover);
      color: var(--text-primary);
    }
    
    &.logout {
      color: var(--color-error);
      
      &:hover {
        background: var(--color-error-light);
        color: var(--color-error);
      }
    }
  }
  
  .dropdown-divider {
    height: 1px;
    background: var(--border-color);
    margin: var(--space-2) 0;
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2);
  border-radius: var(--radius-lg);
  background: transparent;
  transition: all var(--transition-normal);
  border: 1px solid transparent;
  
  &:hover {
    background: var(--bg-secondary);
    border-color: var(--border-color);
  }
  
  .profile-avatar {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-full);
    background: var(--gradient-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: var(--font-semibold);
    font-size: var(--text-sm);
    box-shadow: var(--shadow-sm);
    border: 2px solid var(--bg-primary);
  }
  
  .profile-info {
    text-align: left;
    
    .profile-name {
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      color: var(--text-primary);
      line-height: var(--leading-tight);
    }
    
    .profile-status {
      font-size: var(--text-xs);
      color: var(--success-color);
      display: flex;
      align-items: center;
      gap: var(--space-1);
      margin-top: 2px;
      
      &::before {
        content: '';
        width: 6px;
        height: 6px;
        background: var(--success-color);
        border-radius: var(--radius-full);
      }
    }
  }
  
  .dropdown-arrow {
    width: 16px;
    height: 16px;
    color: var(--text-tertiary);
    transition: transform var(--transition-normal);
  }
  
  &:hover .dropdown-arrow {
    transform: rotate(180deg);
  }
`;

export const QuickStats = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: 0 var(--space-6);
  border-left: 1px solid var(--border-light);
  margin-left: var(--space-6);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  
  .stat-value {
    font-size: var(--text-lg);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    line-height: var(--leading-tight);
  }
  
  .stat-label {
    font-size: var(--text-xs);
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: var(--font-medium);
    margin-top: 2px;
  }
`;
