const { fetchBreedDescription } = require('./breedFetcher');

let searchParam = process.argv.slice(2);

let param = searchParam[0];

const substrParam = param.substring(0, 4);

const breedName = "https://api.thecatapi.com/v1/breeds/search?q=" + substrParam;

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch detils: ', error);
  } else {
    console.log(desc);
  }
});