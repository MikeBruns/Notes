console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var result = notes.addNote();
console.log(result);

var add = notes.add(3, 4);
console.log(add);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
//   if (err) {
//     console.log('uh oh, couldnt read file');
//   }
// });
