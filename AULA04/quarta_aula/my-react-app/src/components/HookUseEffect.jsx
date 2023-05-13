import { useEffect, useState } from 'react';

const HookUseEffect = () => {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    //useEffect sem array de dependencia
    // executa sempre que tiver renderização do componente 
    useEffect(() => {
        console.log('useEffect sem array de dependencias');
    })

    // useEffect com array de dependencias vazia
    // só executa qunado a página carregar 
    useEffect(() => {
        console.log('useEffect com array de dependecia vazia')
    })

    // useEffect com array de dependecias preenchidas
    useEffect (() => {
        console.log('Só executa qunado valor2 for alterado')
    }, [valor2]);

  return (
    <div>
        <hr />
        <h1>Hook useEffect</h1>
        <div>
        <p>Valor 1 - {valor1}</p>
        <button onClick={() => setValor1(valor1 + 1)}>Alterar valor 1!</button>
        </div>

        <div>
        <p>Valor 2 - {valor2}</p>
        <button onClick={() => setValor2(valor2 + 1)}>Alterar valor 2!</button>
        </div>
        <hr />
    </div>
    
  )
}

export default HookUseEffect

