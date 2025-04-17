// src/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CustomFooter from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
}