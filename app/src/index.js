import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainPage } from './MainPage/MainPage.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container">
        <MainPage />
    </div>
);

