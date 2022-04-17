import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'antd/dist/antd.variable.min.css';
import {
  Provider
} from 'react-redux';
import {ConfigProvider} from 'antd';
import store from './store';

ConfigProvider.config({
  theme: {
    primaryColor: "#DB2B21"
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ConfigProvider>

  
);