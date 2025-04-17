// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DSA from '../pages/DSA';
import WebDev from '../pages/WebDev';
import RemoteWebApp from '../pages/RemoteWebDocs';
import MainLayout from '../layouts/MainLayout';
import MinimalLayout from '../layouts/MinimalLayout';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dsa/*" element={<DSA />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<MinimalLayout />}>
        <Route path="/webdev/:path" element={<RemoteWebApp />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        {/* Add protected routes here */}
      </Route>
    </Routes>
  );
}