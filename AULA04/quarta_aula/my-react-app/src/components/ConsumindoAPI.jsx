import { useState, useEffect } from 'react';

import "./ConsumindoApi.css";

const ConsumindoApi = () => {


    // definindo o estado que irá armazenar os dados da API
    const [data, setData] = useState([]);

    const [id, setId] = useState();
    const [usuario, setUsuario] = useState({});

    // Consumindo os dados da API utilizando useEffect
    useEffect(() => {

        // defindo a url da requisição
        let url = `https://jsonplaceholder.typicode.com/users/${id}`;

        const carregarDados = async () => {

            // requisitando os dados da url
            // retorna uma resposta cod precisa ser 200
            const resposta = await fetch(url);

            // converter os dados da resposta para objeto json
            const dados = await resposta.json();
            setUsuario(dados);
            // setData(...data, dados);
            // spread operator
            // pegando os dados e inserindo em data

        };
        carregarDados();

    }, [id]);

    return (
        <div>
            <hr />
            <h1>Nossos usuários</h1>
            <label>Informe o id: </label> <br />
            <input type="number" onChange={(e) => setId(e.target.value)} />
            <div className="container">
                <div className="card">
                    <p className="nome-usuario">{usuario.name}</p>
                    <p>Email: {usuario.email}</p>
                    <p>Telefone: {usuario.telefone}</p>
                </div>
                {/* {data.map((usuario) => (
                    <div className="card" key={usuario.id}>
                        <p className="nome-usuario">Nome: {usuario.name}</p>
                        <p>Email: {usuario.email}</p>
                        <p>Telefone: {usuario.phone}</p>
                    </div>
                ))} */}


            </div>

        </div>
    );
};

export default ConsumindoApi;