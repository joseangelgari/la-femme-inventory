// src/components/InventoryList.tsx
const InventoryList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Lista de Inventario</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Cantidad</th>
            <th className="px-4 py-2">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Accesorio 1</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">$15.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
