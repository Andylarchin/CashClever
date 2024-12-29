# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

# Cash Clever 💰

Effortlessly Manage Your Finances

Cash Clever is a modern budgeting and financial tracking app designed to help you take control of your money. Built with cutting-edge technologies, it provides an intuitive and seamless user experience for tracking expenses, managing budgets, and achieving your financial goals.

✨ Features
Customizable Budgets: Set personalized spending limits and track progress in real-time.
Expense Tracking: Categorize and monitor all your transactions with ease.
Insights & Analytics: Get a clear overview of your spending habits with interactive charts and graphs.
Cloud Sync: Your data is securely stored and accessible across devices via Firebase.
Multi-Platform: Optimized for both desktop and mobile users.
🔧 Tech Stack
Frontend:

React: Fast and responsive UI.
Tailwind CSS: Elegant and customizable styling.
Backend:

Firebase: Secure authentication and real-time database.
GraphQL: Efficient and flexible API for data fetching.
