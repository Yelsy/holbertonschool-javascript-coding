#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
    if (err) console.error(err);
    const data = JSON.parse(body);
    const todosDone = {};
    data.forEach(task => {
      if (task.completed) {
        if (todosDone[task.userId]) todosDone[task.userId]++;
        else todosDone[task.userId] = 1;
      }
    });
    console.log(todosDone);
});
