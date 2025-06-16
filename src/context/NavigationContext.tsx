import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationContextType {
  currentPath: string;
  navigateToPage: (path: string, title: string, breadcrumb: string[]) => void;
  pageTitle: string;
  breadcrumb: string[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

// Route configuration mapping
const routeConfig: Record<string, { title: string; breadcrumb: string[] }> = {
  '/home': {
    title: 'Painel de Controle',
    breadcrumb: ['Início', 'Painel de Controle']
  },
  '/analytics': {
    title: 'Análises',
    breadcrumb: ['Início', 'Análises']
  },
  '/usuarios': {
    title: 'Gerenciar Usuários',
    breadcrumb: ['Início', 'Usuários']
  },
  '/produtos': {
    title: 'Gerenciar Produtos',
    breadcrumb: ['Início', 'Produtos']
  },
  '/pedidos': {
    title: 'Gerenciar Pedidos',
    breadcrumb: ['Início', 'Gestão', 'Pedidos']
  },
  '/estoque': {
    title: 'Controle de Estoque',
    breadcrumb: ['Início', 'Gestão', 'Estoque']
  },
  '/relatorios': {
    title: 'Relatórios',
    breadcrumb: ['Início', 'Gestão', 'Relatórios']
  },
  '/configuracoes': {
    title: 'Configurações do Sistema',
    breadcrumb: ['Início', 'Configurações']
  }
};

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const currentPath = location.pathname;
  const currentRoute = routeConfig[currentPath] || routeConfig['/home'];
  
  const navigateToPage = (path: string, title: string, breadcrumb: string[]) => {
    navigate(path);
  };

  const value = {
    currentPath,
    navigateToPage,
    pageTitle: currentRoute.title,
    breadcrumb: currentRoute.breadcrumb,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
