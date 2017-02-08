const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Adddrees to weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAdress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log('errorMessage');
    } else {
        console.log(result.address);
        weather.getWeather(result.latitude, result.longitude, (errorMessage, reult) => {
            if (errorMessage) {
                console.log('errorMessage');
            } else {
                console.log(JSON.stringify(reult, undefined, 2));
            }
        });
    }
});