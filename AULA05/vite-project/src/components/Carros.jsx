import { useState, useEffect } from "react";
import carrosFetch from '../axios/config';

const Carros = () => {

    const [carros, setCarros] = useState([]);
    const [modelo, setModelo] = useState("");
    const [km, setKm] = useState("");
    const [preco, setPreco] = useState("");

    // realizando requisição na API
    useEffect(() => {
        const getCarros = async () => {
            // realizando requisição no diretorio /carros
            // da api
            const resposta = await carrosFetch.get('/carros');
            // consumindo os dados da resposta
            const dados = resposta.data;

            // atribuindo os dados ao estado carros
            setCarros(dados);

            
        };

        getCarros();

    }, []);

    // Adicionando os carros para a API
    const addCarro = async (e) => {
        e.preventDefault();
        const carro = { modelo, km, preco };
        // enviando o objeto carro para a api 
        // utilizando post
        await carrosFetch.post('/carros', carro);

        // Atualizando a lista de carros dinamicamente
        setCarros((carrosAntes) => [...carrosAntes, carro]);
        
        // controlled inputs 
        setModelo("");
        setKm("");
        setPreco("");
    };

    return (
        <div>
            <h1>Nossos Carros</h1>
            <ul>
                {carros.map((carro) => (
                    <li key={carro.id}>Modelo: {carro.modelo} -
                        Km: {carro.km} -
                        Preço: {carro.preco}</li>
                ))}
            </ul>
            <hr />
            <form onSubmit={(e) => addCarro(e)}>
                <label>Modelo:
                    <input type="text"
                        onChange={(e) => setModelo(e.target.value)}
                        value={modelo}
                    />
                </label> <br />
                <label>
                    Km:
                    <input type="number"
                        onChange={(e) => setKm(Number(e.target.value))}
                        value={km}
                    />
                </label> <br />
                <label>
                    Preço:
                    <input type="text"
                        onChange={(e) => setPreco(Number(e.target.value))}
                        value={preco}
                    />
                </label> <br />
                <input type="submit" />
            </form>
        </div>
    );
};
export default Carros;