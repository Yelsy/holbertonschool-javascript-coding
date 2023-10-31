#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) console.error(err);
  else {
    const results = JSON.parse(body).results;
    let count = 0;
    for (let i = 0; i < results.length; i++) {
      const characters = results[i].characters;
      characters.forEach((id) => {
        if (id.endsWith('/18/')) count++;
      })
    }
    console.log(count);
  }
})
