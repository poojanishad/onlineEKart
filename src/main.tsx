import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { UIProvider } from './context/UIContext';
import './styles/global.css';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <UIProvider>
          <App />
        </UIProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);