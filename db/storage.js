// Allows us to do file operations
const fs = require("fs");
// Assigns unique ID
const {v1: uuidv1} = require("uuid");

const util = require("util");
// Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.
const writeFile = util.promisify(fs.writeFile);

const readFile = util.promisify(fs.readFile);

class Storage {
  writeNote(note) {
    return writeFile("db/db.json", JSON.stringify(note));
  }

  readNote() {
    return readFile("db/db.json", "utf8");
  }

  getNote() {
    return this.readNote().then((note) => {
      return [].concat(JSON.parse(note));
    });
  }

  addNote(note) {
    const { title, text } = note;
    // This is creating a new note with its own unique ID
    const newNote = { title, text, id: uuidv1() };

    return (
      this.getNote()
        // Showing Notes
        .then((notes) => [...notes, newNote])
        // What has been written is then added to the file
        .then((updateNotes) => this.writeNote(updateNotes))
        .then(() => newNote)
    );
  }
}

module.exports = new Storage();
