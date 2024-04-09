// Define um objeto chamado initialData, que contém informações meteorológicas padrão.
const initialData = {
    // Informações sobre a localização (nome, região e país) inicializadas com "-" (vazio).
    location: {
        name: '-',
        region: '-',
        country: '-',
    },
    // Informações sobre as condições meteorológicas atuais (temperatura e condição do tempo).
    current: {
        // Temperatura inicializada como 0.
        temp_c: 0,
        // Condição do tempo inicializada com um texto e um ícone padrão.
        condition: {
            text: '-', // Texto da condição meteorológica inicializado com "-" (vazio).
            // Ícone da condição meteorológica inicializado com um URL para uma imagem padrão.
            icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
        },
    },
};

// Exporta o objeto initialData para que ele possa ser utilizado em outros arquivos.
export default initialData;
