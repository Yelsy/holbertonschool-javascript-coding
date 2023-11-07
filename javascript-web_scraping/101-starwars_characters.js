#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.log('You must provide the movie ID as an argument.');
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

function printCharacterName (characterUrls, characterCount) {
  if (characterCount < characterUrls.length) {
    const characterUrl = characterUrls[characterCount];
    request(characterUrl, (charError, charResponse, charBody) => {
      if (!charError && charResponse.statusCode === 200) {
        const characterData = JSON.parse(charBody);
        console.log(characterData.name);
        printCharacterName(characterUrls, characterCount + 1);
      } else {
        console.error('Error getting character data:', charError);
      }
    });
  }
}

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;
    printCharacterName(characterUrls, 0);
  } else {
    console.error('Error getting movie data:', error);
  }
});