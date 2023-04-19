/* eslint-disable react/button-has-type */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/loginPage';
import LandingPage from './pages/landingPage';
import NewOpportunity from './pages/newOpportunity';
import NotFound from './pages/404';
import LoginSuccess from './components/LoginSuccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/new" element={<NewOpportunity />} />
        <Route path="/not_found" element={<NotFound />} />
        <Route path="/login_sucess" element={<LoginSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
