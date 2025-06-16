import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import GlobalStyles from './styles/GlobalStyles';
import { NavigationProvider } from './context/NavigationContext';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <NavigationProvider>
          <AppContainer>
            <Sidebar />
            <MainContent>
              <Header />
              <ContentArea>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<Dashboard />} />
                  <Route path="/painel" element={<Navigate to="/home" replace />} />
                  <Route path="/analytics" element={<Dashboard />} />
                  <Route path="/usuarios" element={<Dashboard />} />
                  <Route path="/produtos" element={<Dashboard />} />
                  <Route path="/pedidos" element={<Dashboard />} />
                  <Route path="/estoque" element={<Dashboard />} />
                  <Route path="/relatorios" element={<Dashboard />} />
                  <Route path="/configuracoes" element={<Dashboard />} />
                  <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
              </ContentArea>
            </MainContent>
          </AppContainer>
        </NavigationProvider>
      </Router>
    </>
  );
}

export default App;
