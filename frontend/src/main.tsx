/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';

import AppSlice from './reducers/authReducer';
import oppSlice from './reducers/oppReducer';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
    auth: AppSlice,
    listOpportunities: oppSlice,
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
