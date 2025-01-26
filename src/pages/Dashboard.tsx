// src/pages/Dashboard.tsx
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar onLogout={() => navigate('/')} />

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Dashboard Principal</h1>
        <p>Bienvenido a tu panel de administración. Aquí verás información general.</p>
      </div>
    </div>
  );
};

export default Dashboard;
