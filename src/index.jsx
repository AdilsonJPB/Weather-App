// Importa a biblioteca React, necessária para definir e trabalhar com componentes React.
import React from 'react';
// Importa o método ReactDOM.createRoot diretamente do pacote 'react-dom/client'. Este método é usado para criar um novo "root" para renderizar os componentes React.
import ReactDOM from 'react-dom/client';
// Importa um arquivo de estilo CSS para ser aplicado ao aplicativo.
import './index.css';
// Importa o componente App do arquivo App.js. Este é o componente principal que será renderizado na página.
import App from './App';

// Cria um novo "root" para renderizar os componentes React. O método document.getElementById('root') procura um elemento HTML com o id "root" na página. Este é o ponto de entrada para a renderização do React.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderiza o componente <App /> dentro do "root" criado anteriormente.Isso inicializa o aplicativo React e o torna visível na página HTML.
root.render(<App />);
