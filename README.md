# AdminPro - Modern Admin Dashboard

A modern, creative, and intuitive admin dashboard built with React, TypeScript, Vite, and Styled Components.

## 🚀 Features

- **Modern Design**: Clean, contemporary UI with glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **TypeScript**: Full type safety and better development experience
- **Styled Components**: CSS-in-JS styling with theme support
- **Interactive Components**: Collapsible sidebar, search functionality, and more
- **Creative Animations**: Smooth transitions and hover effects
- **Intuitive UX**: User-friendly interface with clear navigation

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **Styled Components** - CSS-in-JS styling
- **Modern CSS** - CSS Grid, Flexbox, CSS Variables

## 📋 Prerequisites

**Important**: This project requires Node.js version 18 or higher due to Vite 6.x requirements.

Current Node.js version detected: v16.16.0
Required: Node.js ^18.0.0 || ^20.0.0 || >=22.0.0

### Upgrade Node.js

#### Option 1: Using Node Version Manager (nvm)
```bash
# Install nvm if you haven't already
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 18
nvm install 18
nvm use 18
```

#### Option 2: Download from Official Website
Visit [nodejs.org](https://nodejs.org/) and download Node.js 18 LTS or higher.

## 🚀 Getting Started

1. **Clone and navigate to the project**:
   ```bash
   cd admin-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:5173`

## 📁 Project Structure

```
admin-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx      # Main dashboard component
│   │   ├── Header.tsx         # Top navigation header
│   │   └── Sidebar.tsx        # Collapsible sidebar
│   ├── styles/
│   │   └── GlobalStyles.ts    # Global styles and CSS variables
│   ├── App.tsx               # Main app component
│   └── main.tsx              # App entry point
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## 🎨 Design Features

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Cyan (#06b6d4)
- **Success**: Emerald (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### Key Components

1. **Collapsible Sidebar**
   - Smooth animations
   - Icon-based navigation
   - User profile section
   - Badge notifications

2. **Modern Header**
   - Global search
   - Quick stats
   - Action buttons
   - User dropdown

3. **Dashboard Cards**
   - Gradient backgrounds
   - Hover animations
   - Progress indicators
   - Activity feed

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Future Enhancements

- [ ] Add chart libraries (Chart.js, Recharts)
- [ ] Implement routing (React Router)
- [ ] Add state management (Zustand/Redux)
- [ ] Dark/Light theme toggle
- [ ] Data tables with sorting/filtering
- [ ] Form components and validation
- [ ] API integration
- [ ] User authentication
- [ ] Mobile-first responsive design
- [ ] PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Note**: If you encounter Node.js version issues, please upgrade to Node.js 18+ before running the project.
