import React from 'react';
import styled from 'styled-components';

const UsersContainer = styled.div`
  display: grid;
  gap: 24px;
  animation: fadeIn 0.6s ease-out;
`;

const PageHeader = styled.div`
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--success-color) 100%);
  border-radius: var(--radius-xl);
  padding: 32px;
  color: white;
  position: relative;
  overflow: hidden;
  margin-bottom: 24px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(50px, -50px);
  }
  
  .header-content {
    position: relative;
    z-index: 1;
    
    h1 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
      color: white;
    }
    
    p {
      font-size: 16px;
      opacity: 0.9;
      color: white;
    }
  }
`;

const PlaceholderCard = styled.div`
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: 48px;
  text-align: center;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  .icon {
    font-size: 64px;
    margin-bottom: 16px;
  }
  
  h2 {
    color: var(--text-primary);
    margin-bottom: 8px;
  }
  
  p {
    color: var(--text-secondary);
  }
`;

const Users: React.FC = () => {
  return (
    <UsersContainer>
      <PageHeader>
        <div className="header-content">
          <h1>👥 Gerenciar Usuários</h1>
          <p>Administre contas de usuário, permissões e perfis</p>
        </div>
      </PageHeader>
      
      <PlaceholderCard>
        <div className="icon">👤</div>
        <h2>Página de Usuários</h2>
        <p>Esta página será implementada com tabela de usuários e funcionalidades CRUD</p>
      </PlaceholderCard>
    </UsersContainer>
  );
};

export default Users;
