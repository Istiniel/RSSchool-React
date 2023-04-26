import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import setupStore, { RootState } from './redux/store';
import { PreloadedState } from '@reduxjs/toolkit';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}
// Create Redux store with state injected by the server
const store = setupStore(window.__PRELOADED_STATE__);

console.log(window.__PRELOADED_STATE__);

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
