const request = require('request');


var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/5336ba50faa5b702ad79750c460eaccb/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io.');
        } else if (!error && response.statusCode === 200) {
            callback(undefined, body.currently.temperature);
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;