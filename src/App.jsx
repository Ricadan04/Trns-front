import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PayrollsPage from './pages/PayrollsPage';
import OrganizationPage from './pages/OrganizationPage';
import OrgChartPage from './pages/OrgChartPage';
import EmployeeListPage from './pages/EmployeesPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen  bg-gray-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nominas" element={<PayrollsPage />} />
            <Route path="/plai" element={<OrganizationPage />} />
            <Route path="/plai/organigrama" element={<OrgChartPage />} />
            <Route path="/plai/personal" element={<EmployeeListPage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
