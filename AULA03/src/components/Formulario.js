import { useState } from 'react';
const Formulario = () => {

    // criando um estado para o nome
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [matricula, setMatricula] = useState(0);
    const [aluno, setAluno] = useState({});
    const [alunos, setAlunos] = useState([]);

    // Evento submit do formulário 
    const handleSubmit = (e) => {
        // impede a ação padrão do form
        e.preventDefault();
        // Alterando o valor do nome
        //setNome("João da silva");  nome = João da Silva

        // alert(`Dados enviados \n 
        // Nome = ${nome} \n 
        // Curso = ${curso}`);

        // Criando um objeto aluno
        setAluno({ matricula, nome, curso });
        if (alunos.length == 0) {
            setAlunos([aluno]);
        }
        else {
            setAlunos([...alunos, aluno]);
        }
        // atualizando a matricula
        setMatricula(matricula + 1);
    };

    // função para pegar o nome digitado
    const handleNome = (e) => {
        // e.target.value 
        // e = objeto do evento
        // target = onde o evento esta acontecendo (input)
        // value = valor digitado no campo 
        setNome(e.target.value);
    };
    return (
        <div>
            <hr />
            <h1>Alunos Cadastrados!</h1>
            <ul>
                {
                    alunos.map(
                        (aluno) => (
                            <li key={aluno.matricula}>
                                Nome: {aluno.nome}
                                - Curso: {aluno.curso}
                            </li>
                        )
                    )
                }
            </ul>
            <hr />
            <h1>Formulario simples!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" onChange={handleNome} />
                </label> <br />

                <label>Selecione o seu curso:</label> <br />
                <select onChange={(e) => setCurso(e.target.value)}>
                    <option value="Javascript">Javascript</option>
                    <option value="React">React</option>
                    <option value="Python">Python</option>
                </select> <br />

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Formulario;