import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './pages/App.server';
import './index.css';

const rootElement = document.getElementById('root');
hydrateRoot(rootElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);