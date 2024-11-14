import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainPage } from './MainPage/MainPage.tsx';
import { Examples } from './Examples/Examples.tsx';
import { Contacts } from './Contacts/Contacts.tsx';
import { Footer } from './Footer/Footer.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container">
        <MainPage />
        <Examples />
        <Contacts />
        <Footer />
    </div>
);

