#!/usr/bin/node

const fs = require('fs');
const path = process.argv[2];
const content = process.argv[3];
fs.writeFile8(path, content, 'utf8', (err) => {
  if (err) console.error(err);
});
