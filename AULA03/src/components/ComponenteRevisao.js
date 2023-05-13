import React from 'react'

const ComponenteRevisao = ({ nome, curso, nota, evento }) => {
    // let nome = 'Márcio';
    // let curso = 'Programação';
    // let nota = 10;

    const VerificarNota = () => {
        if (nota > 8) {
            return <p>Aprovado com honras</p>
        } else if (nota >= 6 && nota <= 8) {
            return <p>Aprovado</p>
        } else {
            return <p>Recuperação</p>
        };

    };

    return (
        <div>
            <hr />

            <h1>Dados do aluno: {nome}</h1>
            <p>Curso: {curso}</p>
            <p>Nota: {nota}</p>

            {VerificarNota()}
            <button onClick={evento}>Acione o evento!</button>

            <hr />
        </div>
    );
};

export default ComponenteRevisao;