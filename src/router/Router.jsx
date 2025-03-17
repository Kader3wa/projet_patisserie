import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/Home';
import LoginPage from '../pages/Login/LoginPage';
import ErrorPage from '../pages/Error/Error';
import ContactPage from '../pages/Contact/ContactPage';
import GamePage from '../pages/Game/Game';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="game" element={<GamePage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;