import { useState } from 'react';

const CalculadoraSimples = () => {
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const [operacao, setOperacao] = useState("");
    const [resultado, setResultado] = useState("");

    const handleValor1 = (e) => {
        // Atribuindo o valor digitado no campo no estado valor1
        setValor1(Number(e.target.value));
    }
    // valor1 = e.target.value
    // setValor1(e.target.value)
    const handleCalcular = () => {
        if (operacao === "+") {
            setResultado(valor1 + valor2);
        }
        else if (operacao === "/") {
            setResultado(valor1 / valor2);
        }
        else if (operacao === '-') {
            setResultado(valor1 - valor2);
        }
        else if (operacao === "*") {
            setResultado(valor1 * valor2);
        }

        setValor1("");
        setValor2("");
    } // fim da função handleCalcular

    return (
        <div>
            <h1>Resultado: {resultado}</h1>
            <hr />
            <div>
                <label>Valor 1</label>
                <input type="number"
                    onChange={handleValor1}
                    value={valor1} />
            </div>

            <div>
                <label>Valor 2</label>
                <input type="number"
                    onChange={(e) => setValor2(Number(e.target.value))}
                    value={valor2} />
            </div>
            <br />
            <div>
                <label>Seleciona a operação:</label>
                <select onChange={(e) => setOperacao(e.target.value)}>
                    <option selected disabled>Selecione...</option>
                    <option value="+">Somar</option>
                    <option value="-">Subtrair</option>
                    <option value="/">Dividir</option>
                    <option value="*">Multiplicar</option>
                </select>
            </div>
            <br />
            <button onClick={handleCalcular}>Calcular</button>

        </div>
    )
}

export default CalculadoraSimples