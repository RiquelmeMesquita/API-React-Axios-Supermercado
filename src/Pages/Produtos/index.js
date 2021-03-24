import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
      const resposta = await axios.get(
        'http://localhost:3000/produtos?_expand=secoe',
      );
      setProdutos(resposta.data);
    }
    getProdutos();
  }, []);

  if (produtos.length === 0) {
    return <p>Aguarde, carregando...</p>;
  }

  async function removerProduto(id) {
    if (window.confirm('Tem certeza que deseja excluir o produto?')) {
      try {
        await axios.delete(`http://localhost:3000/produtos/${id}`);
        setProdutos(produtos.filter((produto) => produto.id !== id));
      } catch (error) {
        alert('Problema ao excluir o produto!');
      }
    }
  }

  return (
    <div>
      <h1>Produtos</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mês de validade</th>
            <th>Seção</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.mes_validade}</td>
              <td>{produto.secoe.nome}</td>
              <td>
                <Link
                  className="badge badge-primary"
                  to={`cadastro/${produto.id}`}
                >
                  Editar
                </Link>{' '}
                <button
                  style={{ border: '0' }}
                  className="badge badge-danger"
                  onClick={() => removerProduto(produto.id)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Produtos;
