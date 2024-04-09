// Define a chave de acesso à API WeatherAPI.
const KEY = 'c279d7d072ed444785c193356240704';

// Define a função fetchData como assíncrona, que recebe o nome da cidade como parâmetro.
const fetchData = async (city) => {
    // Constrói a URL da API com a chave de acesso e o nome da cidade.
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=n`;
    // Realiza uma solicitação de busca (fetch) à URL especificada.
    const fetchResponse = await fetch(url);
    // Extrai os dados da resposta JSON.
    const data = await fetchResponse.json();
    // Retorna os dados obtidos da API.
    return data;
}

// Exporta a função fetchData para que ela possa ser utilizada em outros arquivos.
export default fetchData;
