import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider } from 'react-toastx';
import App from './App';
import './index.css';
import 'react-toastx/dist/app.css';
import AppClassComponent from './AppClassComponent';

ReactDOM.render(
  <ToastProvider>
    <App />
    <AppClassComponent />
  </ToastProvider>,
  document.getElementById('root')
);
