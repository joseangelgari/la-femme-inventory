// src/components/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">La Femme</h2>
      <ul>
        <li>
          <Link
            to="/dashboard"
            className={`block py-2 px-4 rounded-lg hover:bg-gray-700 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/inventario"
            className={`block py-2 px-4 rounded-lg hover:bg-gray-700 ${location.pathname === '/inventario' ? 'bg-gray-700' : ''}`}
          >
            Inventario
          </Link>
        </li>
        <li>
          <Link
            to="/ordenes"
            className={`block py-2 px-4 rounded-lg hover:bg-gray-700 ${location.pathname === '/ordenes' ? 'bg-gray-700' : ''}`}
          >
            Órdenes
          </Link>
        </li>
        <li className="mt-6">
          <button
            onClick={onLogout}
            className="w-full py-2 px-4 bg-red-600 rounded-lg text-white hover:bg-red-700"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
