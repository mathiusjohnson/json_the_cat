const request = require('request');

let searchParam = process.argv.slice(2);

let param = searchParam[0];

const substrParam = param.substring(0, 4);

let searchEngine = "https://api.thecatapi.com/v1/breeds/search?q=" + substrParam;

request(searchEngine, (error, response, body) => {
  if (error !== null) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});