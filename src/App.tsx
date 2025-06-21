import { AppContainer, ContentArea, MainContent } from '@/styles/app'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import GlobalStyles from '@/styles/GlobalStyles'
import Header from '@/components/Header'
import { LoginForm } from './components/LoginForm'
import Sidebar from '@/components/Sidebar'
import pages from '@/pages'
import useAuth from './hooks/useAuth'

function App() {
  const { user, permissions } = useAuth()

  return (
    <ErrorBoundary>
      <GlobalStyles />
      <Router>
        <AppContainer>
          {user && <Sidebar />}
          <ContentArea>
            {user && <Header />}
            <MainContent>
              <Routes>
                {user &&
                  pages.map(page => (
                    <Route path={page.path} element={page.component} />
                  ))}
                {!user && <Route path="/login" element={<LoginForm />} />}
                <Route
                  path="*"
                  element={
                    user ? <Navigate to="/home" /> : <Navigate to="/login" />
                  }
                />
              </Routes>
            </MainContent>
          </ContentArea>
        </AppContainer>
      </Router>
    </ErrorBoundary>
  )
}

export default App
