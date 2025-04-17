import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

interface NeumorphicLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NeumorphicLink: React.FC<NeumorphicLinkProps> = ({ to, label, isActive, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-5 py-2 rounded-2xl font-medium text-sm sm:text-base 
        ${
          isActive
            ? 'text-blue-500 shadow-[inset_4px_4px_6px_#d1d9e6,inset_-4px_-4px_6px_#ffffff]'
            : 'text-gray-600 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] hover:shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]'
        }
        transition-all duration-300 ease-in-out bg-[#e0e5ec] block text-center`}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 px-4 py-3 shadow-sm bg-[#e0e5ec] w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <AnimatedLogo />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-full shadow-neumorphic bg-[#e0e5ec]">
            {menuOpen ? <FiX className="w-6 h-6 text-gray-700" /> : <FiMenu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex gap-4 items-center">
          <NeumorphicLink to="/dsa" label="Problem Solving" isActive={isActive('/dsa')} />
          <NeumorphicLink to="/webdev" label="Web Development" isActive={isActive('/webdev')} />
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-3 items-center">
          <NeumorphicLink to="/dsa" label="Problem Solving" isActive={isActive('/dsa')} onClick={closeMenu} />
          <NeumorphicLink to="/webdev" label="Web Development" isActive={isActive('/webdev')} onClick={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
