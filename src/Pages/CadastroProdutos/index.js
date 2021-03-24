import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const CadastroProdutos = () => {
  const params = useParams();
  const [secoes, setSecoes] = useState([]);
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [mes_validade, setMes_validade] = useState('');
  const [secoeId, setSecoeId] = useState(1);

  useEffect(() => {
    if (params.id) {
      async function getProduto() {
        const resposta = await axios.get(
          `http://localhost:3000/produtos/${params.id}`,
        );

        setNome(resposta.data.nome);
        setMes_validade(resposta.data.mes_validade);
        setSecoeId(resposta.data.secoeId);
      }
      getProduto();
    }
  }, [params.id]);

  useEffect(() => {
    async function getSecoes() {
      const resposta = await axios.get('http://localhost:3000/secoes');
      setSecoes(resposta.data);
    }
    getSecoes();
  }, []);

  async function submeterFormulario(e) {
    e.preventDefault();

    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/produtos', {
          nome,
          mes_validade,
          secoeId: Number(secoeId),
        });
      } else {
        await axios.put(`http://localhost:3000/produtos/${params.id}`, {
          nome,
          mes_validade,
          secoeId: Number(secoeId),
        });
      }

      setNome('');
      setMes_validade('');
      setSecoeId(1);

      alert('Dados salvos com sucesso!');
      navigate('/');
    } catch (error) {
      alert('Erro ao salvar os dados!');
    }
  }

  return (
    <form onSubmit={submeterFormulario}>
      <div>
        <h1>Formulário de cadastro de produtos</h1>

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

        <div className="form-group">
          <label htmlFor="mes_validade">Mês de validade</label>
          <input
            type="number"
            name="mes_validade"
            id="mes_validade"
            className="form-control"
            value={mes_validade}
            onChange={(e) => setMes_validade(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="secoeId">Seção</label>
          <select
            name="secoeId"
            id="secoeId"
            className="form-control"
            value={secoeId}
            onChange={(e) => setSecoeId(e.target.value)}
          >
            {secoes.map((secoe) => (
              <option key={secoe.id} value={secoe.id}>
                {secoe.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default CadastroProdutos;
