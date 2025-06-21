import {
  ActionButton,
  HeaderContainer,
  LeftSection,
  NotificationButton,
  PageTitle,
  ProfileButton,
  ProfileDropdown,
  QuickStats,
  RightSection,
  SearchContainer,
  StatItem,
} from './styles';
import {
  Bell,
  ChevronDown,
  Download,
  LogOut,
  Plus,
  Search,
  Settings,
  User,
} from 'lucide-react';
import React, { useState } from 'react';

import pages from '../../pages';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Get page info from config based on current path
  const currentPage = pages.find(page => page.path === location.pathname);

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <HeaderContainer className="animate-fade-in">
      <LeftSection>
        <PageTitle>
          <h1>{currentPage?.title}</h1>
          <div className="breadcrumb">
            {currentPage?.breadcrumb.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </PageTitle>

        <SearchContainer>
          <Search className="search-icon" size={16} />
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar qualquer coisa..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
      </LeftSection>

      <RightSection>
        <QuickStats>
          <StatItem>
            <div className="stat-value">1.234</div>
            <div className="stat-label">Usuários</div>
          </StatItem>
          <StatItem>
            <div className="stat-value">R$ 45,2K</div>
            <div className="stat-label">Receita</div>
          </StatItem>
        </QuickStats>

        <ActionButton variant="secondary">
          <Plus size={16} />
          Novo
        </ActionButton>

        <ActionButton variant="primary">
          <Download size={16} />
          Exportar
        </ActionButton>

        <NotificationButton hasNotifications>
          <Bell className="notification-icon" size={18} />
        </NotificationButton>

        <ProfileDropdown>
          <ProfileButton
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <div className="profile-info">
              <div className="profile-name">{user?.name || 'User'}</div>
              <div className="profile-status">Online</div>
            </div>
            <ChevronDown className="dropdown-arrow" size={16} />
          </ProfileButton>

          {showProfileDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <User size={16} />
                <span>Profile</span>
              </div>
              <div className="dropdown-item">
                <Settings size={16} />
                <span>Settings</span>
              </div>
              <div className="dropdown-divider" />
              <div className="dropdown-item logout" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Logout</span>
              </div>
            </div>
          )}
        </ProfileDropdown>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
