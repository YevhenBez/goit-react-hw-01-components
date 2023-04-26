import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './components/statistics/css/statistics.css';
import './components/friendList/css/friendList.css';
import './components/transactionHistory/css/transactionHistory.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
