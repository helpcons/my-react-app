import './App.css'
// import Greeting from './Greeting.js'
import FormPage from './formulario.tsx'
// import nome from './nada.tsx'

function App() {
  return (
    // Exemplo 01
  //   <div className="App">
  //     <h1>Bem-vindo ao nosso projeto React com Vite!</h1>
  //     <p>Esta é a nossa primeira interação com o React. Em breve, adicionaremos mais funcionalidades!</p>
  //     <p>Desenvolvido por {nome}</p>
  //   </div>
  // Nova div

  // Exemplo 02
  // <div className='App'>
  //   <Greeting />
  //   {/* Outros componentes e conteúdos podem ser adicionados aqui */}
  // </div>

    <div className='App'>
    <FormPage />
    {/* Outros componentes e conteúdos podem ser adicionados aqui */}
    </div>
  );
}

export default App
