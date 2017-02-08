const request = require('request');

var geocodeAdress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google server.');
        } else if (body.status == 'ZERO_RESULTS') {
            callback('Unable find that adress.');
        } else if (body.status == 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports.geocodeAdress = geocodeAdress;