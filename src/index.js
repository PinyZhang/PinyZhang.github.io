import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getUserData, githubLogin, githubCallback } from './utils/github-auth'; 

const main = async () => {
  await githubCallback();

  const userData = getUserData();

  if (!userData) {
    githubLogin();
    return;
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App username={JSON.stringify(userData)} />
    </React.StrictMode>
  );

  reportWebVitals();
}

main();
