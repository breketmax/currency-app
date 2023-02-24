import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { router } from './utils/router';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
