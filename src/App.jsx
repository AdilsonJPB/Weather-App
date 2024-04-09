// Importa a biblioteca React e a função useState do pacote 'react'.
import React, { useState } from 'react';
// Importa a função fetchData do arquivo 'api.js' no diretório 'services'.
import fetchData from './services/api';
// Importa o objeto initialData do arquivo 'initialData.js' no diretório 'helpers'.
import initialData from './helpers/initialData';
// Importa o componente Card do arquivo 'Card.js' no diretório 'components'.
import Card from './components/Card';


// Define o componente App como uma função.
function App() {
  // Define o estado 'city' para armazenar o nome da cidade digitado pelo usuário. O useState define o estado inicial como uma string vazia.
  const [city, setCity] = useState('');
  // Define o estado 'data' para armazenar os dados da cidade. O useState define o estado inicial com os dados iniciais do objeto 'initialData'.
  const [data, setData] = useState({ initialData });
  
  // Define a função handleSubmit para lidar com o envio do formulário.
  const handleSubmit = (event) => {
    // Previne o comportamento padrão do formulário.
    event.preventDefault();

    // Chama a função fetchData para obter os dados da cidade com base no nome inserido. Quando a promessa é resolvida, atualiza o estado 'data' com os dados obtidos.
    fetchData(city).then((response) => {
      setData(response);
    });
  }

  // Retorna a estrutura JSX do componente App.
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      {/* Formulário para inserir o nome da cidade */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Cidade'
          className='p-3 rounded-lg outline-none'
          // Define o valor do campo de entrada como 'city' e atualiza-o quando o usuário digita.
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        {/* Botão de envio do formulário */}
        <button
          type='submit'
          className='bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold'
        >
          Pesquisar
        </button>
      </form>

      {/* Componente Card para exibir os dados da cidade */}
      <Card data={data}/>

    </div>
  );
}

// Exporta o componente App para ser utilizado em outras partes do aplicativo.
export default App;
