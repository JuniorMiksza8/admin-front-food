import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ isCollapsed: boolean }>`
  width: ${props => props.isCollapsed ? '80px' : '280px'};
  background: var(--bg-surface);
  border-right: 1px solid var(--border-color);
  transition: all var(--transition-slow);
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: var(--shadow-lg);
  z-index: var(--z-sticky);
`;

export const Logo = styled.div<{ isCollapsed: boolean }>`
  padding: var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-primary);
  
  .logo-icon {
    width: 40px;
    height: 40px;
    background: var(--gradient-primary);
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: var(--font-bold);
    font-size: var(--text-lg);
    flex-shrink: 0;
    box-shadow: var(--shadow-md);
  }
  
  .logo-text {
    font-size: var(--text-xl);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    opacity: ${props => props.isCollapsed ? '0' : '1'};
    transform: ${props => props.isCollapsed ? 'translateX(-10px)' : 'translateX(0)'};
    transition: all var(--transition-slow);
    letter-spacing: -0.025em;
  }
`;

export const CollapseButton = styled.button`
  position: absolute;
  top: var(--space-6);
  right: -12px;
  width: 24px;
  height: 24px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  z-index: 10;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--bg-secondary);
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
  }
  
  svg {
    width: 12px;
    height: 12px;
    color: var(--text-secondary);
    transition: transform var(--transition-slow);
  }
`;

export const Navigation = styled.nav`
  flex: 1;
  padding: var(--space-6) 0;
  overflow-y: auto;
`;

export const NavSection = styled.div`
  margin-bottom: var(--space-8);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h6<{ isCollapsed: boolean }>`
  padding: 0 var(--space-6) var(--space-3);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
  opacity: ${props => props.isCollapsed ? '0' : '1'};
  transition: opacity var(--transition-slow);
`;

export const NavItem = styled.a<{ isActive?: boolean; isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-6);
  margin: 0 var(--space-3);
  color: ${props => props.isActive ? 'var(--primary-color)' : 'var(--text-secondary)'};
  background: ${props => props.isActive ? 'var(--primary-50)' : 'transparent'};
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
  position: relative;
  cursor: pointer;
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  
  &:hover {
    background: ${props => props.isActive ? 'var(--primary-100)' : 'var(--gray-50)'};
    color: ${props => props.isActive ? 'var(--primary-600)' : 'var(--text-primary)'};
    transform: translateX(2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: ${props => props.isActive ? '20px' : '0'};
    background: var(--primary-color);
    border-radius: var(--radius-full);
    transition: height var(--transition-normal);
  }
  
  .nav-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
  
  .nav-text {
    font-weight: var(--font-medium);
    opacity: ${props => props.isCollapsed ? '0' : '1'};
    transform: ${props => props.isCollapsed ? 'translateX(-10px)' : 'translateX(0)'};
    transition: all var(--transition-slow);
    white-space: nowrap;
  }
  
  .nav-badge {
    margin-left: auto;
    background: var(--error-color);
    color: white;
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
    padding: 2px 6px;
    border-radius: var(--radius-full);
    min-width: 18px;
    text-align: center;
    opacity: ${props => props.isCollapsed ? '0' : '1'};
    transition: opacity var(--transition-slow);
    box-shadow: var(--shadow-sm);
  }
`;

export const UserProfile = styled.div<{ isCollapsed: boolean }>`
  padding: var(--space-6);
  border-top: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  background: var(--bg-secondary);
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    background: var(--gradient-accent);
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
  
  .user-info {
    opacity: ${props => props.isCollapsed ? '0' : '1'};
    transform: ${props => props.isCollapsed ? 'translateX(-10px)' : 'translateX(0)'};
    transition: all var(--transition-slow);
    
    .user-name {
      font-weight: var(--font-semibold);
      color: var(--text-primary);
      font-size: var(--text-sm);
      line-height: var(--leading-tight);
    }
    
    .user-role {
      font-size: var(--text-xs);
      color: var(--text-tertiary);
      margin-top: 2px;
    }
  }
  
  .user-status {
    margin-left: auto;
    opacity: ${props => props.isCollapsed ? '0' : '1'};
    transition: opacity var(--transition-slow);
    
    .status-dot {
      width: 8px;
      height: 8px;
      background: var(--success-color);
      border-radius: var(--radius-full);
      border: 2px solid var(--bg-primary);
      box-shadow: var(--shadow-sm);
    }
  }
`;
