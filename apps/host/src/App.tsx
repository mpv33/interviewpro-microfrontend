// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DSA from './pages/DSA';
import WebDev from './pages/WebDev';
import './App.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/webdev" element={<WebDev />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
