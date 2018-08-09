const axios = require('axios');



const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2b5c3966e6a465601c74ef57d9221ef7`);
    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para lat: ${lat} lng :${lng}`)
    // }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}