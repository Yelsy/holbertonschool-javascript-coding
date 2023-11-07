#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2]; // Get the Movie ID from the command line argument

if (!movieId) {
  console.log('Please provide a Movie ID as a command line argument.');
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error('Error:', error);
  } else {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;

    // Fetch character data for each character URL
    characterUrls.forEach((characterUrl) => {
      request(characterUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        } else {
          console.error('Error:', error);
        }
      });
    });
  }
});
