import Home from './Home'
import Products from './Products'
import Users from './Users'

export interface PageConfig {
  path: string
  component: React.ReactNode
  title: string
  description: string
  icon: string
  permissions: string[]
  breadcrumb: string[]
}

const pages: PageConfig[] = [
  {
    path: '/home',
    component: <Home />,
    title: 'Dashboard',
    description: 'Visão geral do sistema com métricas principais',
    icon: '🏠',
    permissions: [],
    breadcrumb: ['Dashboard', 'Home'],
  },
  {
    path: '/usuarios',
    component: <Users />,
    title: 'Gerenciar Usuários',
    description: 'Administre usuários e suas permissões',
    icon: '👥',
    permissions: ['users:read'],
    breadcrumb: ['Dashboard', 'Usuários'],
  },
  {
    path: '/produtos',
    component: <Products />,
    title: 'Gerenciar Produtos',
    description: 'Cadastre e gerencie produtos do catálogo',
    icon: '📦',
    permissions: ['products:read'],
    breadcrumb: ['Dashboard', 'Produtos'],
  },
]

export default pages
