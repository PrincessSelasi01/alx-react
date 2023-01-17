import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

// const notifications = document.createElement('div');
// notifications.id = 'root-notifications';
const root_notif = ReactDOM.createRoot(document.getElementById('root-notifications'));
root_notif.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

