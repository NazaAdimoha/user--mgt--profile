import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import SingleUserDashBoard from './pages/userDashBoard/SingleUserDashBoard';
import UsersDashBoard from './pages/userDashBoard/UsersDashBoard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/usersdashboard" element={<UsersDashBoard />} />
      <Route path="/userdashboard" element={<SingleUserDashBoard />} />
      
    </Routes>

  );
}

export default App;
