import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollTop';  
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DescriptionPage from './pages/DescriptionPage';
import MyDescriptionsPage from './pages/MyDescriptionsPage';
import SettingsPage from './pages/SettingsPage';
import UploadPage from './pages/UploadPage';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ForgotPass from './pages/ForgotPass';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/my-descriptions" element={<MyDescriptionsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
      </Routes>
    </Router>
  );
}

export default App;
