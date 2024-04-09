// Importa a biblioteca React, necessária para criar componentes React.
import React from 'react';
// Importa o módulo 'propTypes' para definir tipos de propriedades dos componentes.
import propTypes from 'prop-types';

// Define o componente funcional Card, que recebe um objeto 'data' como argumento.
function Card(data) {
    // Desestrutura o objeto 'data' para extrair as propriedades 'location' e 'current'.
    const {
        location,
        current,
    } = data;

    // Retorna a estrutura JSX do cartão.
    return (
        <div className='bg-white p-6 mt-10 rounded-lg shadow-lg min-w-[200px]'>
            <div className='text-center'>
                {/* Exibe o nome da localização e sua região e país */}
                <span className='block text-xl font-bold text-slate-700'>{location.name}</span>
                <span className='text-slate-400 text-sm font-medium'>{`${location.region}, ${location.country}`}</span>
            </div>

            <div className='flex font-bold text-slate-700 justify-center mt-4 mb-2'>
                {/* Exibe a temperatura atual */}
                <span className='text-8xl'>{current.temp_c}</span>
                <span className='text-3xl mt-2'>C°</span>
            </div>

            <div className='flex justify-center flex-col items-center'>
                {/* Exibe o ícone e a condição meteorológica atual */}
                <span className='block'>{current.condition.icon}</span>
                <span className='text-slate-700 font-bold'>{current.condition.icon}</span>
            </div>
        </div>
    );
}

// Exporta o componente Card para ser utilizado em outros arquivos.
export default Card;

// Define as propriedades necessárias e seus tipos esperados usando propTypes.
Card.propTypes = {
    data: propTypes.object, // Define 'data' como um objeto.
}.isRequired; // Indica que 'data' é uma propriedade obrigatória.
