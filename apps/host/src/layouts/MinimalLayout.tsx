// src/layouts/MinimalLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MinimalLayout() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}