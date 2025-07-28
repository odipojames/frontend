import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import VerifyEmail from "./components/VerifyEmail";
import Dashboard from "./components/Dashboard";
import { AuthProvider, useAuth } from "./AuthContext";
import './App.css';

function Navigation() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  return (
    <nav>
      {isAuthenticated ? (
        <>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/logout" onClick={handleLogout}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link> |{" "}
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
