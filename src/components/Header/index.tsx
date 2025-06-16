import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import {
  Search,
  Plus,
  Download,
  Bell,
  ChevronDown
} from 'lucide-react';
import {
  HeaderContainer,
  LeftSection,
  PageTitle,
  SearchContainer,
  RightSection,
  ActionButton,
  NotificationButton,
  ProfileDropdown,
  ProfileButton,
  QuickStats,
  StatItem
} from './styles';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { pageTitle, breadcrumb } = useNavigation();

  return (
    <HeaderContainer className="animate-fade-in">
      <LeftSection>
        <PageTitle>
          <h1>{pageTitle}</h1>
          <div className="breadcrumb">
            {breadcrumb.map((item, index) => (
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
            onChange={(e) => setSearchQuery(e.target.value)}
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
          <ProfileButton>
            <div className="profile-avatar">JS</div>
            <div className="profile-info">
              <div className="profile-name">João Silva</div>
              <div className="profile-status">Online</div>
            </div>
            <ChevronDown className="dropdown-arrow" size={16} />
          </ProfileButton>
        </ProfileDropdown>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
