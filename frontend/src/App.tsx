/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/button-has-type */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

import LoginPage from './pages/loginPage';
import LandingPage from './pages/landingPage';
import NotFound from './pages/404';
import LoginSuccess from './components/LoginSuccess';
import { setAuthUser, setIsAuthenticated } from './reducers/authReducer';
import SupportPage from './pages/supportPage';
import ContactPage from './pages/contactPage';
import AddOpportunityPage from './pages/addOpportunityPage';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

  // const user = useSelector((state: any) => state.App.authUser as any) as any;
  const user = true;

  const handleAuth = async (e: any) => {
    e.preventDefault();
    const googleUrl = 'http://127.0.0.1:5000/google/login';
    const loginUrl = await axios.get(googleUrl, {
      headers: {
        'Access-Control-Allow-Origin': '* ',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
    console.log(loginUrl);
    if (loginUrl) {
      window.location.assign(loginUrl.data.auth_url);
    }
  };
  useEffect(() => {
    if (localStorage.getItem('JWT') == null) {
      let query = new URLSearchParams(window.location.search);
      const token = query.get('jwt');
      console.log('token' + token);
      if (token) {
        localStorage.setItem('JWT', token);
        return navigate('/home');
      }
    }
  });

  return (
    <Routes>
      <Route path="/" element={<LoginPage login={handleAuth}></LoginPage>} />
      <Route
        path="/home"
        element={user ? <LandingPage /> : <Navigate to="/" />}
      />
      <Route
        path="/new"
        element={user ? <AddOpportunityPage /> : <Navigate to="" />}
      />
      <Route path="/not_found" element={<NotFound />} />
      <Route path="/login_sucess" element={<LoginSuccess />} />
      <Route path="/opportunity" element={<AddOpportunityPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/contactUs" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
