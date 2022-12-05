import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import HooksIntro from './HooksIntro';
// import UseEffectDemo from './components/Header/UseEffectDemo';
import HttpRequestDemo from './components/HttpRequestDemo';
import './css/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HttpRequestDemo />
  </React.StrictMode>
);
