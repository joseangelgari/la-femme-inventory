// src/pages/InventoryPage.tsx
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const InventoryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar onLogout={() => navigate('/')} />

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Inventario</h1>
        <p>Contenido del inventario...</p>
      </div>
    </div>
  );
};

export default InventoryPage;
