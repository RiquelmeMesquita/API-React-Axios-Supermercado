import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink activeClassName="badge badge-primary" to="/" end>
        Produtos
      </NavLink>
      {' | '}
      <NavLink activeClassName="badge badge-primary" to="cadastro" end>
        Cadastro
      </NavLink>
      {' | '}
      <NavLink activeClassName="badge badge-primary" to="mostrarSec" end>
        Seção
      </NavLink>
      {' | '}
      <NavLink activeClassName="badge badge-primary" to="cadastroSec" end>
        Cadastro de seção
      </NavLink>
    </nav>
  );
};

export default Header;
