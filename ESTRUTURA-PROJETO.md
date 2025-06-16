# Estrutura do Projeto AdminPro

## 📁 Organização dos Arquivos

```
admin-dashboard/
├── 📄 package.json                 # Dependências e configurações do projeto
├── 📄 vite.config.ts              # Configuração do Vite
├── 📄 tsconfig.json               # Configuração do TypeScript
├── 📄 index.html                  # Template HTML principal
├── 📄 README.md                   # Documentação em inglês
├── 📄 README-PT.md                # Documentação em português
├── 📄 ESTRUTURA-PROJETO.md        # Este arquivo
│
├── 📁 public/                     # Assets estáticos
│   └── 📄 vite.svg               # Ícone do Vite
│
└── 📁 src/                        # Código fonte
    ├── 📄 main.tsx                # Ponto de entrada da aplicação
    ├── 📄 App.tsx                 # Componente raiz da aplicação
    ├── 📄 vite-env.d.ts          # Tipos do Vite
    │
    ├── 📁 styles/                 # Estilos globais
    │   └── 📄 GlobalStyles.ts     # Estilos globais e variáveis CSS
    │
    └── 📁 components/             # Componentes da aplicação
        ├── 📁 Sidebar/            # Componente da barra lateral
        │   ├── 📄 index.tsx       # Componente principal da sidebar
        │   └── 📄 styles.ts       # Estilos da sidebar
        │
        ├── 📁 Header/             # Componente do cabeçalho
        │   ├── 📄 index.tsx       # Componente principal do header
        │   └── 📄 styles.ts       # Estilos do header
        │
        └── 📁 Dashboard/          # Componente do painel principal
            ├── 📄 index.tsx       # Componente principal do dashboard
            └── 📄 styles.ts       # Estilos do dashboard
```

## 🎨 Arquitetura de Estilos

### Styled Components Organizados
Cada componente possui seu próprio arquivo de estilos (`styles.ts`) contendo:

- **Styled Components** específicos do componente
- **Props tipadas** para componentes dinâmicos
- **Variáveis CSS** reutilizáveis
- **Media queries** responsivas
- **Animações e transições**

### Exemplo de Estrutura de Estilos:
```typescript
// src/components/Sidebar/styles.ts
import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ isCollapsed: boolean }>`
  // Estilos do container principal
`;

export const Logo = styled.div<{ isCollapsed: boolean }>`
  // Estilos do logo
`;

// ... outros styled components
```

## 🌍 Internacionalização (i18n)

### Textos em Português Brasileiro
- ✅ **Sidebar**: Navegação traduzida (Painel de Controle, Usuários, etc.)
- ✅ **Header**: Busca e ações em português (Pesquisar, Exportar, etc.)
- ✅ **Dashboard**: Cards e métricas em português (Receita, Crescimento, etc.)
- ✅ **Atividades**: Feed de atividades em português
- ✅ **Ações**: Botões e labels traduzidos

### Formatação Brasileira
- 💰 **Moeda**: R$ 45,2K (formato brasileiro)
- 🔢 **Números**: 2.543 (separador de milhares)
- 📅 **Tempo**: "2 minutos atrás", "1 hora atrás"

## 🎯 Componentes Principais

### 1. Sidebar (`src/components/Sidebar/`)
- **Funcionalidades**:
  - Sidebar retrátil com animações
  - Navegação por seções (Principal, Gestão)
  - Badges de notificação
  - Perfil do usuário
  - Estados ativos dos itens de menu

### 2. Header (`src/components/Header/`)
- **Funcionalidades**:
  - Breadcrumb de navegação
  - Barra de pesquisa global
  - Estatísticas rápidas
  - Botões de ação (Novo, Exportar)
  - Notificações com badge
  - Dropdown do perfil do usuário

### 3. Dashboard (`src/components/Dashboard/`)
- **Funcionalidades**:
  - Cards de estatísticas com gradientes
  - Gráficos (placeholder para implementação)
  - Barras de progresso
  - Feed de atividades recentes
  - Ações rápidas
  - Layout responsivo em grid

## 🎨 Sistema de Design

### Variáveis CSS Globais
```css
:root {
  --primary-color: #6366f1;      /* Índigo */
  --secondary-color: #8b5cf6;    /* Roxo */
  --accent-color: #06b6d4;       /* Ciano */
  --success-color: #10b981;      /* Verde */
  --warning-color: #f59e0b;      /* Âmbar */
  --error-color: #ef4444;        /* Vermelho */
  /* ... outras variáveis */
}
```

### Padrões de Estilo
- **Bordas**: `var(--radius-sm)` até `var(--radius-xl)`
- **Sombras**: `var(--shadow-sm)` até `var(--shadow-xl)`
- **Cores**: Sistema consistente de cores semânticas
- **Tipografia**: Hierarquia clara com pesos definidos
- **Espaçamento**: Grid system baseado em múltiplos de 4px

## 🔧 Tecnologias Utilizadas

### Core
- **React 18**: Biblioteca principal
- **TypeScript**: Tipagem estática
- **Vite**: Build tool e dev server
- **Styled Components**: CSS-in-JS

### Desenvolvimento
- **ESLint**: Linting de código
- **Node.js 22+**: Runtime necessário
- **npm**: Gerenciador de pacotes

## 🚀 Como Executar

1. **Pré-requisitos**: Node.js 18+ instalado
2. **Instalar dependências**: `npm install`
3. **Executar em desenvolvimento**: `npm run dev`
4. **Build para produção**: `npm run build`

## 📝 Próximos Passos

### Funcionalidades Planejadas
- [ ] Sistema de roteamento
- [ ] Gerenciamento de estado global
- [ ] Integração com APIs
- [ ] Autenticação e autorização
- [ ] Tema escuro/claro
- [ ] Componentes de formulário
- [ ] Tabelas de dados avançadas
- [ ] Gráficos interativos

### Melhorias de Código
- [ ] Testes unitários
- [ ] Storybook para componentes
- [ ] Documentação de componentes
- [ ] Performance optimization
- [ ] Acessibilidade (a11y)
- [ ] SEO optimization
