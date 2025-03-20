import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/Home';
import LoginPage from '../pages/Login/LoginPage';
import ErrorPage from '../pages/Error/Error';
import ContactPage from '../pages/Contact/ContactPage';
import GamePage from '../pages/Game/Game';
import NavbarComponent from '../components/Navbar/Navbar';
import AdminDashboardPage from '../pages/Admin/DashboardPage';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminDashboardPage />} />
                    <Route path="/game" element={<GamePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;