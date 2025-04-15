import { Link, useLocation } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

interface NeumorphicLinkProps {
  to: string;
  label: string;
  isActive: boolean;
}

const NeumorphicLink: React.FC<NeumorphicLinkProps> = ({ to, label, isActive }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-xl font-medium 
        ${isActive
          ? 'text-blue-400 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff]'  // Active text color + inset shadow
          : 'text-gray-500 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] hover:shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]' // Non-active hover shadow
        }
        transition-all duration-300 ease-in-out`}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="p-3 shadow-md bg-white mb-4 flex items-center justify-between">
      {/* Logo on the left */}
      <Link to="/" className="flex items-center">
        <AnimatedLogo />
      </Link>

      {/* Neumorphic navigation links on the right */}
      <div className="flex gap-4">
        <NeumorphicLink to="/dsa" label="Problem Solving" isActive={isActive('/dsa')} />
        <NeumorphicLink to="/webdev" label="Web Development" isActive={isActive('/webdev')} />
        {/* <NeumorphicLink to="/system-design" label="System Design" isActive={isActive('/system-design')} />
        <NeumorphicLink to="/login" label="Login" isActive={isActive('/login')} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
