# AdminPro - Painel Administrativo Moderno

Um painel administrativo moderno, criativo e intuitivo construído com React, TypeScript, Vite e Styled Components.

## 🚀 Funcionalidades

- **Design Moderno**: Interface limpa e contemporânea com efeitos de glassmorfismo
- **Layout Responsivo**: Design totalmente responsivo que funciona em todos os dispositivos
- **TypeScript**: Segurança de tipos completa e melhor experiência de desenvolvimento
- **Styled Components**: Estilização CSS-in-JS com suporte a temas
- **Componentes Interativos**: Sidebar retrátil, funcionalidade de busca e muito mais
- **Animações Criativas**: Transições suaves e efeitos de hover
- **UX Intuitiva**: Interface amigável com navegação clara

## 🛠️ Stack Tecnológica

- **React 18** - React mais recente com hooks
- **TypeScript** - Segurança de tipos e melhor DX
- **Vite** - Ferramenta de build rápida e servidor de desenvolvimento
- **Styled Components** - Estilização CSS-in-JS
- **CSS Moderno** - CSS Grid, Flexbox, Variáveis CSS

## 📋 Pré-requisitos

**Importante**: Este projeto requer Node.js versão 18 ou superior devido aos requisitos do Vite 6.x.

### Atualizar Node.js

#### Opção 1: Usando Node Version Manager (nvm)
```bash
# Instalar nvm se ainda não tiver
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instalar e usar Node.js 18+
nvm install 22.16.0
nvm use 22.16.0
nvm alias default 22.16.0
```

#### Opção 2: Download do Site Oficial
Visite [nodejs.org](https://nodejs.org/) e baixe Node.js 18 LTS ou superior.

## 🚀 Começando

1. **Navegar para o projeto**:
   ```bash
   cd admin-dashboard
   ```

2. **Instalar dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Abrir o navegador** e visitar `http://localhost:5173`

## 📁 Estrutura do Projeto

```
admin-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── index.tsx          # Componente principal do painel
│   │   │   └── styles.ts          # Estilos do painel
│   │   ├── Header/
│   │   │   ├── index.tsx          # Cabeçalho de navegação
│   │   │   └── styles.ts          # Estilos do cabeçalho
│   │   └── Sidebar/
│   │       ├── index.tsx          # Sidebar retrátil
│   │       └── styles.ts          # Estilos da sidebar
│   ├── styles/
│   │   └── GlobalStyles.ts        # Estilos globais e variáveis CSS
│   ├── App.tsx                    # Componente principal da aplicação
│   └── main.tsx                   # Ponto de entrada da aplicação
├── public/                        # Assets estáticos
└── package.json                   # Dependências e scripts
```

## 🎨 Características do Design

### Paleta de Cores
- **Primária**: Índigo (#6366f1)
- **Secundária**: Roxo (#8b5cf6)
- **Destaque**: Ciano (#06b6d4)
- **Sucesso**: Esmeralda (#10b981)
- **Aviso**: Âmbar (#f59e0b)
- **Erro**: Vermelho (#ef4444)

### Componentes Principais

1. **Sidebar Retrátil**
   - Animações suaves
   - Navegação baseada em ícones
   - Seção de perfil do usuário
   - Notificações com badges

2. **Cabeçalho Moderno**
   - Busca global
   - Estatísticas rápidas
   - Botões de ação
   - Dropdown do usuário

3. **Cards do Painel**
   - Fundos com gradiente
   - Animações de hover
   - Indicadores de progresso
   - Feed de atividades

## 🔧 Scripts Disponíveis

- `npm run dev` - Iniciar servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Visualizar build de produção
- `npm run lint` - Executar ESLint

## 🌟 Funcionalidades Implementadas

### Interface em Português
- ✅ Todos os textos traduzidos para português brasileiro
- ✅ Formatação de moeda em Real (R$)
- ✅ Formatação de números no padrão brasileiro
- ✅ Mensagens e labels em português

### Arquitetura de Componentes
- ✅ Styled Components extraídos para arquivos separados
- ✅ Estrutura de pastas organizada por componente
- ✅ Separação clara entre lógica e estilos
- ✅ Reutilização de estilos e temas

### Design Responsivo
- ✅ Layout adaptável para diferentes tamanhos de tela
- ✅ Sidebar retrátil para dispositivos menores
- ✅ Grid responsivo para cards e estatísticas
- ✅ Tipografia escalável

## 🎯 Próximas Melhorias

- [ ] Adicionar bibliotecas de gráficos (Chart.js, Recharts)
- [ ] Implementar roteamento (React Router)
- [ ] Adicionar gerenciamento de estado (Zustand/Redux)
- [ ] Toggle de tema escuro/claro
- [ ] Tabelas de dados com ordenação/filtragem
- [ ] Componentes de formulário e validação
- [ ] Integração com API
- [ ] Autenticação de usuário
- [ ] Design mobile-first
- [ ] Capacidades PWA

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça suas alterações
4. Teste completamente
5. Envie um pull request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

**Nota**: Certifique-se de ter Node.js 18+ instalado antes de executar o projeto.
