import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Components/Login-Register/Login';
import Register from './Components/Login-Register/Register';
import Title from './Components/Login-Register/Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Title /> */}
    <Login />
    {/* <Register /> */}
  </React.StrictMode>
);

