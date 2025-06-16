import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0;
`;

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  animation: fadeIn 0.3s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
