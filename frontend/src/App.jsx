import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import {Router, Route} from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { checkAuth } from './../../backend/src/controllers/auth.controller';
import {Loader} from "lucide-react";

const App = () => {
    const {authUser, checkAuth} = useAuthStore();

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);

    console.log({authUser});

    <div className='flex-items-center justify-center h-screen bg-gray-100'>
      <Loader className="size-10 animate-spin text-blue-500" />

    </div>
  return (
    <div>

      <Navbar /> 

      <Router>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Router>
    </div>
  )
}

export default App
