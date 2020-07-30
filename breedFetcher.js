const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error !== null) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(error, "Breed not found");
    } else {
      callback(error, data[0].description.trim());
    }
  });
};

module.exports = fetchBreedDescription;
