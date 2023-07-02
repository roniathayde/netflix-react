import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { GlobalStyle } from './styles/global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" exact element={ <App/> } />
        <Route path="*" exact element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);