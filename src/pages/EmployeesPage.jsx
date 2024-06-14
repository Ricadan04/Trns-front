import React, { useState } from 'react';
import data from '../assets/data'; // Importar los datos desde tu archivo data.js

const EmployeeListPage = () => {
  const [filters, setFilters] = useState({
    name: '',
    address: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Lista de opciones para el filtro de dirección
  const addressOptions = [
    'Dirección General',
    'Dirección de Conocimiento',
    'Dirección de Innovación y Tecnologia',
    'Dirección de Planeación',
    'Dirección Administrativa',
    'Dirección Jurídica',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Aplicar el slice a los primeros 47 registros de data
  const slicedData = data.slice(0, 47);

  // Filtrar los datos según los filtros aplicados
  const filteredData = slicedData.filter((employee) => {
    const nameMatch = employee.Empleado.toLowerCase().includes(filters.name.toLowerCase());
    const addressMatch =
      filters.address === '' || employee.Direccion.toLowerCase() === filters.address.toLowerCase();

    return nameMatch && addressMatch;
  });

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Calcular el índice del primer y último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Plantilla PLAi</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={filters.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Buscar por nombre"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Dirección
            </label>
            <select
              id="address"
              name="address"
              value={filters.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccionar dirección</option>
              {addressOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((employee, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{employee.Empleado}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.Cargo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.Direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="mt-4 flex justify-center">
        <nav className="relative z-0 inline-flex shadow-sm">
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
              currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                currentPage === i + 1
                  ? 'text-indigo-600 bg-indigo-100 hover:bg-indigo-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={currentPage === totalPages}
            className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
              currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            Siguiente
          </button>
        </nav>
      </div>
    </div>
  );
};

export default EmployeeListPage;
