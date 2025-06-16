import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../../context/NavigationContext';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  Warehouse,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  SidebarContainer,
  Logo,
  CollapseButton,
  Navigation,
  NavSection,
  SectionTitle,
  NavItem,
  UserProfile
} from './styles';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { navigateToPage } = useNavigation();

  const navigationItems = [
    {
      section: 'Principal',
      items: [
        { 
          id: 'home', 
          path: '/home',
          label: 'Painel de Controle', 
          icon: LayoutDashboard, 
          badge: null,
          title: 'Painel de Controle',
          breadcrumb: ['Início', 'Painel de Controle']
        },
        { 
          id: 'analytics', 
          path: '/analytics',
          label: 'Análises', 
          icon: BarChart3, 
          badge: null,
          title: 'Análises',
          breadcrumb: ['Início', 'Análises']
        },
        { 
          id: 'usuarios', 
          path: '/usuarios',
          label: 'Usuários', 
          icon: Users, 
          badge: '12',
          title: 'Gerenciar Usuários',
          breadcrumb: ['Início', 'Usuários']
        },
        { 
          id: 'produtos', 
          path: '/produtos',
          label: 'Produtos', 
          icon: Package, 
          badge: null,
          title: 'Gerenciar Produtos',
          breadcrumb: ['Início', 'Produtos']
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
          badge: '3',
          title: 'Gerenciar Pedidos',
          breadcrumb: ['Início', 'Gestão', 'Pedidos']
        },
        { 
          id: 'estoque', 
          path: '/estoque',
          label: 'Estoque', 
          icon: Warehouse, 
          badge: null,
          title: 'Controle de Estoque',
          breadcrumb: ['Início', 'Gestão', 'Estoque']
        },
        { 
          id: 'relatorios', 
          path: '/relatorios',
          label: 'Relatórios', 
          icon: FileText, 
          badge: null,
          title: 'Relatórios',
          breadcrumb: ['Início', 'Gestão', 'Relatórios']
        },
        { 
          id: 'configuracoes', 
          path: '/configuracoes',
          label: 'Configurações', 
          icon: Settings, 
          badge: null,
          title: 'Configurações do Sistema',
          breadcrumb: ['Início', 'Configurações']
        },
      ]
    }
  ];

  const handleNavigation = (item: any) => {
    navigateToPage(item.path, item.title, item.breadcrumb);
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
                  onClick={() => handleNavigation(item)}
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

      <UserProfile isCollapsed={isCollapsed}>
        <div className="avatar">JS</div>
        <div className="user-info">
          <div className="user-name">João Silva</div>
          <div className="user-role">Administrador</div>
        </div>
        <div className="user-status">
          <div className="status-dot"></div>
        </div>
      </UserProfile>
    </SidebarContainer>
  );
};

export default Sidebar;
