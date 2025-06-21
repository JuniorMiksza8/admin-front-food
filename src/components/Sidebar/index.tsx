import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users
} from 'lucide-react';
import {
  CollapseButton,
  Logo,
  NavItem,
  NavSection,
  Navigation,
  SectionTitle,
  SidebarContainer
} from './styles';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    {
      section: 'Principal',
      items: [
        { 
          id: 'home', 
          path: '/home',
          label: 'Painel de Controle', 
          icon: LayoutDashboard, 
          badge: null
        },
        { 
          id: 'usuarios', 
          path: '/usuarios',
          label: 'Usuários', 
          icon: Users, 
          badge: '12'
        },
        { 
          id: 'produtos', 
          path: '/produtos',
          label: 'Produtos', 
          icon: Package, 
          badge: null
        },
      ]
    },
    {
      section: 'Gestão',
      items: [
        { 
          id: 'pedidos', 
          path: '/pedidos',
          label: 'Pedidos', 
          icon: ShoppingCart, 
          badge: '3'
        }
        ]
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <SidebarContainer isCollapsed={isCollapsed} className="animate-slide-in">
      <Logo isCollapsed={isCollapsed}>
        <div className="logo-icon">A</div>
        <div className="logo-text">AdminPro</div>
      </Logo>
      
      <CollapseButton onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? (
          <ChevronRight size={12} />
        ) : (
          <ChevronLeft size={12} />
        )}
      </CollapseButton>

      <Navigation>
        {navigationItems.map((section) => (
          <NavSection key={section.section}>
            <SectionTitle isCollapsed={isCollapsed}>{section.section}</SectionTitle>
            {section.items.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavItem
                  key={item.id}
                  isActive={location.pathname === item.path}
                  isCollapsed={isCollapsed}
                  onClick={() => handleNavigation(item.path)}
                >
                  <div className="nav-icon">
                    <IconComponent />
                  </div>
                  <span className="nav-text">{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </NavItem>
              );
            })}
          </NavSection>
        ))}
      </Navigation>

    </SidebarContainer>
  );
};

export default Sidebar;
