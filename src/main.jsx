import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Screen2Registration from './screens/Screen2Registration.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Existing untouched 713-line App at root */}
        <Route path="/" element={<App />} />
        {/* Screen 2 route */}
        <Route path="/register" element={<Screen2Registration />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);