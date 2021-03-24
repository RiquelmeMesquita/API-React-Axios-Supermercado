import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Secao = () => {
  const [secoes, setSecoes] = useState([]);

  useEffect(() => {
    async function getSecoes() {
      const resposta = await axios.get('http://localhost:3000/secoes');
      setSecoes(resposta.data);
    }
    getSecoes();
  }, []);

  if (secoes.length === 0) {
    return <p>Aguarde, carregando...</p>;
  }

  async function removerSecao(id) {
    if (window.confirm('Tem certeza que deseja excluir a seção?')) {
      try {
        await axios.delete(`http://localhost:3000/secoes/${id}`);
        setSecoes(secoes.filter((secao) => secao.id !== id));
      } catch (error) {
        alert('Problema ao excluir a seção!');
      }
    }
  }

  return (
    <div>
      <h1>Seções</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {secoes.map((secao) => (
            <tr key={secao.id}>
              <td>{secao.nome}</td>
              <td>
                <Link
                  className="badge badge-primary"
                  to={`/cadastroSec/${secao.id}`}
                >
                  Editar
                </Link>{' '}
                <button
                  style={{ border: '0' }}
                  className="badge badge-danger"
                  onClick={() => removerSecao(secao.id)}
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

export default Secao;
