console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {title, body};

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    //continue
  }

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('getting all notes');
};

var getNote = (title) => {
  console.log('Read note', title);
};

var removeNote = (title) => {
  console.log('Remove note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
