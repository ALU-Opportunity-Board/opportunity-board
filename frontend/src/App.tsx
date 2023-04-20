/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { setAuthUser, setIsAuthenticated } from './reducers/authReducer';
import SupportPage from './pages/supportPage';
import ContactPage from './pages/contactPage';

function App() {
  // const user = useSelector((state: any) => state.App.authUser as any) as any;
  const user = true;
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
        <Route path="/opportunity" element={<NewOpportunity />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
