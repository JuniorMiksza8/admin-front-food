import React from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardContainer, PageContainer } from './styles';
import Home from '../../pages/Home';
import Analytics from '../../pages/Analytics';
import Users from '../../pages/Users';
import Products from '../../pages/Products';
import PlaceholderPage from '../PlaceholderPage';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderPage = () => {
    switch (currentPath) {
      case '/home':
        return <Home />;
      
      case '/analytics':
        return <Analytics />;
      
      case '/usuarios':
        return <Users />;
      
      case '/produtos':
        return <Products />;
      
      case '/pedidos':
        return (
          <PlaceholderPage
            title="🛒 Gerenciar Pedidos"
            description="Acompanhe e gerencie todos os pedidos do sistema"
            icon="📋"
            gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            pageType="Pedidos"
          />
        );
      
      case '/estoque':
        return (
          <PlaceholderPage
            title="📋 Controle de Estoque"
            description="Monitore e controle o inventário de produtos"
            icon="📦"
            gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            pageType="Estoque"
          />
        );
      
      case '/relatorios':
        return (
          <PlaceholderPage
            title="📄 Relatórios"
            description="Gere e visualize relatórios detalhados"
            icon="📊"
            gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            pageType="Relatórios"
          />
        );
      
      case '/configuracoes':
        return (
          <PlaceholderPage
            title="⚙️ Configurações do Sistema"
            description="Configure parâmetros e preferências do sistema"
            icon="🔧"
            gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
            pageType="Configurações"
          />
        );
      
      default:
        return <Home />;
    }
  };

  return (
    <DashboardContainer>
      <PageContainer>
        {renderPage()}
      </PageContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
