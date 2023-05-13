import React from 'react'
import App from '../App.css';

const ListaAlunos = () => {

    const alunos = [
        { matricula: 1, nome: 'Márcio', curso: 'Programação', nota: 10 },
        { matricula: 1, nome: 'João', curso: 'Programação', nota: 8 },
        { matricula: 1, nome: 'Alex', curso: 'Programação', nota: 9 },
    ];

    return (
        <div>
            <h1>Nossos alunos matriculados</h1>
            <ul>
                {
                    alunos.map(
                        (aluno) => (
                            <li key={aluno.matricu}>Nome: {aluno.nome}
                                - Curso: {aluno.curso}
                                - Nota: {aluno.nota}</li>
                        )
                    )
                }
            </ul>
            <hr />
        </div>
    );
};

export default ListaAlunos;