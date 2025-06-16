import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f8fafc;
    min-height: 100vh;
    color: #1e293b;
  }

  :root {
    /* Primary Colors - Professional Blue Palette */
    --primary-color: #3b82f6;
    --primary-dark: #2563eb;
    --primary-light: #60a5fa;
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    
    /* Secondary Colors - Elegant Purple */
    --secondary-color: #8b5cf6;
    --secondary-dark: #7c3aed;
    --secondary-light: #a78bfa;
    
    /* Accent Colors */
    --accent-color: #06b6d4;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --error-color: #ef4444;
    --info-color: #3b82f6;
    
    /* Neutral Colors - Professional Gray Scale */
    --gray-50: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
    --gray-500: #64748b;
    --gray-600: #475569;
    --gray-700: #334155;
    --gray-800: #1e293b;
    --gray-900: #0f172a;
    
    /* Text Colors */
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --text-tertiary: #64748b;
    --text-light: #94a3b8;
    --text-muted: #cbd5e1;
    
    /* Background Colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --bg-tertiary: #f1f5f9;
    --bg-accent: #eff6ff;
    --bg-surface: #ffffff;
    --bg-overlay: rgba(15, 23, 42, 0.8);
    
    /* Border Colors */
    --border-color: #e2e8f0;
    --border-light: #f1f5f9;
    --border-dark: #cbd5e1;
    --border-focus: #3b82f6;
    
    /* Shadow System */
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    
    /* Border Radius */
    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-full: 9999px;
    
    /* Spacing Scale */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    
    /* Typography Scale */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
    
    /* Line Heights */
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;
    
    /* Font Weights */
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    --font-extrabold: 800;
    
    /* Transitions */
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 200ms ease-in-out;
    --transition-slow: 300ms ease-in-out;
    
    /* Z-Index Scale */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
    --z-toast: 1080;
  }

  code {
    font-family: 'JetBrains Mono', 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
    letter-spacing: -0.025em;
  }

  h1 { 
    font-size: var(--text-4xl); 
    font-weight: var(--font-bold);
  }
  h2 { 
    font-size: var(--text-3xl); 
    font-weight: var(--font-semibold);
  }
  h3 { 
    font-size: var(--text-2xl); 
    font-weight: var(--font-semibold);
  }
  h4 { 
    font-size: var(--text-xl); 
    font-weight: var(--font-medium);
  }
  h5 { 
    font-size: var(--text-lg); 
    font-weight: var(--font-medium);
  }
  h6 { 
    font-size: var(--text-base); 
    font-weight: var(--font-medium);
  }

  p {
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
    font-size: var(--text-base);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    font-weight: var(--font-medium);
    transition: all var(--transition-normal);
    border-radius: var(--radius-lg);
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    
    &:focus-visible {
      outline: 2px solid var(--border-focus);
      outline-offset: 2px;
    }
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
    transition: all var(--transition-normal);
    border-radius: var(--radius-md);
    
    &:focus {
      outline: none;
      border-color: var(--border-focus);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-normal);
    
    &:hover {
      color: var(--primary-color);
    }
  }

  ul, ol {
    list-style: none;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-100);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: var(--radius-full);
    
    &:hover {
      background: var(--gray-400);
    }
  }

  /* Selection */
  ::selection {
    background: rgba(59, 130, 246, 0.2);
    color: var(--text-primary);
  }

  /* Focus styles */
  *:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-16px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Utility Classes */
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-slide-in {
    animation: slideIn 0.3s ease-out;
  }

  .animate-slide-up {
    animation: slideUp 0.3s ease-out;
  }

  .animate-scale-in {
    animation: scaleIn 0.2s ease-out;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }

  /* Glass morphism effect */
  .glass {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Gradient backgrounds */
  .gradient-primary {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  }

  .gradient-secondary {
    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-dark) 100%);
  }

  .gradient-accent {
    background: linear-gradient(135deg, var(--accent-color) 0%, var(--primary-color) 100%);
  }

  /* Text utilities */
  .text-gradient {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Responsive breakpoints */
  @media (max-width: 640px) {
    :root {
      --text-4xl: 2rem;
      --text-3xl: 1.5rem;
      --text-2xl: 1.25rem;
    }
  }
`;

export default GlobalStyles;
