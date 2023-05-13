import ComponenteRevisao from './components/ComponenteRevisao';
import ListaAlunos from './components/ListaAlunos';
import Formulario from './components/Formulario';


function App() {
  let escola = "Infinity School - Creative Design";

  const handleMensagem = () => {
    alert("Você é o Mior!");
  };

  return (
    <div className="App">
      <h1>Escola: {escola} </h1> {/* Template expression / interpolação */}
      <ComponenteRevisao
        nome="Márcio"
        curso="React"
        nota={10}
        evento={handleMensagem}/>
      <ListaAlunos/>
      <Formulario/>
    </div>
  );
};

export default App;
