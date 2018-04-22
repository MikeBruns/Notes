console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const action = process.argv[2];
console.log(argv);

if (action === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Added note:', note.title, note.body);
  } else {
    console.log(`Note with title '${argv.title}' already exists`);
  }
} else if (action === 'list') {
  notes.getAll();
} else if (action === 'read') {
  notes.getNote(argv.title);
} else if (action === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log(`Command: ${command} unknown.`)
}

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
//   if (err) {
//     console.log('uh oh, couldnt read file');
//   }
// });
