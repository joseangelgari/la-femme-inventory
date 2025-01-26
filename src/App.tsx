// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import InventoryPage from './pages/InventoryPage';
import OrdersPage from './pages/OrdersPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Función de login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta para Login */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Ruta para las páginas con Sidebar, solo si el usuario está logueado */}
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventario" element={<InventoryPage />} />
            <Route path="/ordenes" element={<OrdersPage />} />
          </>
        ) : (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
