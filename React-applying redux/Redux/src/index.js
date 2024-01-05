import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// stor setup
import store from './app/store';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>
);
