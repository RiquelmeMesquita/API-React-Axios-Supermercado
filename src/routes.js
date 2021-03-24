import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Produtos from './Pages/Produtos';
import CadastroProdutos from './Pages/CadastroProdutos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Produtos />} />
      <Route path="cadastro" element={<CadastroProdutos />} />
      <Route path="cadastro/:id" element={<CadastroProdutos />} />
    </Routes>
  );
};

export default AppRoutes;
