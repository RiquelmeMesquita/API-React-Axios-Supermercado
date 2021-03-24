import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Produtos from './Pages/Produtos';
import CadastroProdutos from './Pages/CadastroProdutos';
import Secao from './Pages/Secao';
import CadastroSecoes from './Pages/CadastroSecao';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Produtos />} />
      <Route path="cadastro" element={<CadastroProdutos />} />
      <Route path="cadastro/:id" element={<CadastroProdutos />} />

      <Route path="/mostrarSec" element={<Secao />} />
      <Route path="/cadastroSec" element={<CadastroSecoes />} />
      <Route path="/cadastroSec/:id" element={<CadastroSecoes />} />
      {/* editar */}
    </Routes>
  );
};

export default AppRoutes;
