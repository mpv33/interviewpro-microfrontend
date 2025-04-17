// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  // Add your auth logic here
  return true;
};

export default function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}