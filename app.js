const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const action = process.argv[2];

if (action === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Added note:');
    notes.logNote(note);
  } else {
    console.log(`Note with title '${argv.title}' already exists`);
  }
} else if (action === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (action === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (action === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `Removed note with title ${argv.title}` : `Note not found`;
  console.log(message);
} else {
  console.log(`Command: ${command} unknown.`)
}
