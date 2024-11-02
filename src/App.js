// src/App.js

import React from 'react';
import Menu from './components/Menu'; // Убедитесь, что путь правильный
import Home from './pages/Home';
import Buildings from './pages/Buildings';
import './App.css'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Menu />
            <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buildings" element={<Buildings />} />
                {/* Добавьте другие маршруты */}
            </Routes>
            </div>
        </Router>
    );
};

export default App;
