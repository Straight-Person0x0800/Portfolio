import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard";
import DashboardForm from "./pages/DashboardForm";
import MultiStepForm from "./pages/MultiStepForm";
import LoginPage from "./pages/LoginPage";


const App = () => {
  return (
    <Router>
        <ToastContainer />

        <nav>
        {/* Navigation Links */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |  <Link to="/login">Login</Link>

      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardform" element={<DashboardForm />} />
        <Route path="/d" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default App;
