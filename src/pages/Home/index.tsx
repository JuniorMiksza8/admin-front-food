import React from 'react';
import {
  Users,
  DollarSign,
  Package,
  TrendingUp,
  Download,
  UserPlus,
  CheckCircle,
  AlertTriangle,
  Settings
} from 'lucide-react';
import {
  HomeContainer,
  WelcomeSection,
  StatsGrid,
  StatCard,
  MainGrid,
  Card,
  ChartPlaceholder,
  ActivityList,
  QuickActions,
  ActionButton,
  ProgressBar,
  ProgressSection,
  ProgressItem,
  ProgressHeader
} from './styles';

const Home: React.FC = () => {
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return 'Bom dia';
    if (currentHour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const stats = [
    {
      icon: Users,
      value: '2.543',
      label: 'Total de Usuários',
      change: '+12%',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    {
      icon: DollarSign,
      value: 'R$ 45,2K',
      label: 'Receita',
      change: '+8%',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: Package,
      value: '1.423',
      label: 'Pedidos',
      change: '+23%',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    {
      icon: TrendingUp,
      value: '94,5%',
      label: 'Crescimento',
      change: '+5%',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    }
  ];

  const activities = [
    {
      user: 'JS',
      text: 'João Silva criou uma nova conta de usuário',
      time: '2 minutos atrás',
      status: 'success'
    },
    {
      user: 'MS',
      text: 'Maria Santos atualizou o estoque de produtos',
      time: '15 minutos atrás',
      status: 'warning'
    },
    {
      user: 'PO',
      text: 'Pedro Oliveira excluiu um registro de cliente',
      time: '1 hora atrás',
      status: 'error'
    },
    {
      user: 'AC',
      text: 'Ana Costa gerou relatório mensal',
      time: '2 horas atrás',
      status: 'success'
    }
  ];

  return (
    <HomeContainer>
      <WelcomeSection>
        <div className="welcome-content">
          <h1>{getGreeting()}, João Silva! 👋</h1>
          <p>Bem-vindo de volta ao seu painel administrativo. Aqui está um resumo das suas atividades hoje.</p>
          
          <div className="welcome-stats">
            <div className="stat-item">
              <div className="stat-number">24</div>
              <div className="stat-label">Novos usuários hoje</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">R$ 3,2K</div>
              <div className="stat-label">Vendas hoje</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Pedidos pendentes</div>
            </div>
          </div>
        </div>
      </WelcomeSection>

      <StatsGrid>
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <StatCard key={index} gradient={stat.gradient}>
              <div className="stat-icon">
                <IconComponent />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-change">
                <TrendingUp className="change-icon" />
                {stat.change} do mês passado
              </div>
            </StatCard>
          );
        })}
      </StatsGrid>

      <MainGrid>
        <Card>
          <div className="card-header">
            <h3>Visão Geral das Análises</h3>
            <div className="card-actions">
              <ActionButton variant="default">
                <Download size={16} />
                Exportar
              </ActionButton>
            </div>
          </div>
          <ChartPlaceholder>
            <div>📊 Visualização de gráficos será implementada aqui</div>
            <div>(Considere usar Chart.js, Recharts ou D3.js)</div>
          </ChartPlaceholder>
          
          <ProgressSection>
            <ProgressItem>
              <ProgressHeader>
                <span className="progress-label">Tráfego do Site</span>
                <span className="progress-value">78%</span>
              </ProgressHeader>
              <ProgressBar progress={78} color="var(--primary-color)" />
            </ProgressItem>
            
            <ProgressItem>
              <ProgressHeader>
                <span className="progress-label">Aplicativo Móvel</span>
                <span className="progress-value">65%</span>
              </ProgressHeader>
              <ProgressBar progress={65} color="var(--success-color)" />
            </ProgressItem>
            
            <ProgressItem>
              <ProgressHeader>
                <span className="progress-label">Redes Sociais</span>
                <span className="progress-value">42%</span>
              </ProgressHeader>
              <ProgressBar progress={42} color="var(--warning-color)" />
            </ProgressItem>
          </ProgressSection>
        </Card>

        <div>
          <Card>
            <div className="card-header">
              <h3>Atividades Recentes</h3>
            </div>
            <ActivityList>
              {activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-avatar">{activity.user}</div>
                  <div className="activity-content">
                    <div className="activity-text">{activity.text}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                  <div className={`activity-status ${activity.status}`}>
                    {activity.status === 'success' ? 'sucesso' : 
                     activity.status === 'warning' ? 'aviso' : 'erro'}
                  </div>
                </div>
              ))}
            </ActivityList>
          </Card>

          <Card style={{ marginTop: 'var(--space-6)' }}>
            <div className="card-header">
              <h3>Ações Rápidas</h3>
            </div>
            <QuickActions>
              <ActionButton variant="primary">
                <UserPlus size={16} />
                Adicionar Usuário
              </ActionButton>
              <ActionButton variant="success">
                <CheckCircle size={16} />
                Aprovar
              </ActionButton>
              <ActionButton variant="warning">
                <AlertTriangle size={16} />
                Revisar
              </ActionButton>
              <ActionButton variant="default">
                <Settings size={16} />
                Configurações
              </ActionButton>
            </QuickActions>
          </Card>
        </div>
      </MainGrid>
    </HomeContainer>
  );
};

export default Home;
