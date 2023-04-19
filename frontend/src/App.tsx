/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/button-has-type */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

import LoginPage from './pages/loginPage';
import LandingPage from './pages/landingPage';
import NewOpportunity from './pages/newOpportunity';
import NotFound from './pages/404';
import LoginSuccess from './components/LoginSuccess';

function App() {
  const user = useSelector((state: any) => state.App.setAuthUser as any) as any;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={user ? <LandingPage /> : <Navigate to="/" />}
        />
        <Route
          path="/new"
          element={user ? <NewOpportunity /> : <Navigate to="" />}
        />
        <Route path="/not_found" element={<NotFound />} />
        <Route path="/login_sucess" element={<LoginSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
