# React + TypeScript + Vite

Project Description
The project is an e-commerce web application built using React, TypeScript, and Vite. It allows users to browse a variety of clothing products, manage a shopping cart, and view detailed product information. The application features a responsive design, ensuring a seamless user experience across different devices.

## Key Features:
**Product Browsing:** Users can view a list of products with images, titles, ratings, and prices.
**Shopping Cart Functionality:** Users can add products to their cart, adjust quantities, and see a summary of their order, including subtotal, discounts, and delivery fees.
**Dynamic Navigation:** The application includes a navigation bar that allows users to easily access different sections, such as the shop and cart.
**Responsive Layout:** The design adapts to various screen sizes, providing an optimal experience on both desktop and mobile devices.
**Context API for State Management:** The application utilizes React's Context API to manage the shopping cart state across different components.

## Technologies Used:
**React:** For building the user interface.
**TypeScript:** For type safety and improved developer experience.
**Vite:** For fast development and build processes.
**SCSS:** For styling components with a modular approach.

## Directory Structure:
**Components:** Contains reusable UI components such as buttons, images, and layout elements.
**Pages:** Contains different pages of the application, including the shop and cart pages.
**Context:** Manages the global state for the shopping cart.
**Data:** Holds product information and other static data.
**Assets:** Contains images and styles used throughout the application.

This project serves as a foundation for building a fully functional e-commerce platform, and is still under development for further enhancements and features.

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
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

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
})
```
"# shop.co" 
