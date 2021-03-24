import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const CadastroSecoes = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');

  useEffect(() => {
    if (params.id) {
      async function getSecao() {
        const resposta = await axios.get(
          `http://localhost:3000/secoes/${params.id}`,
        );

        setNome(resposta.data.nome);
      }
      getSecao();
    }
  }, [params.id]);

  async function submeterFormulario(e) {
    e.preventDefault();

    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/secoes', {
          nome,
        });
      } else {
        await axios.put(`http://localhost:3000/secoes/${params.id}`, {
          nome,
        });
      }

      setNome('');

      alert('Dados salvos com sucesso!');
      navigate('/mostrarSec');
    } catch (error) {
      alert('Erro ao salvar os dados!');
    }
  }

  return (
    <form onSubmit={submeterFormulario}>
      <div>
        <h1>Formulário de cadastro de seções</h1>

        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default CadastroSecoes;
