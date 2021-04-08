// Allows us to do file operations
const fs = require("fs");
// Assigns unique ID
const uuid = require("uuid");

const util = require("util");
// Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.
const writeFiles = util.promisify(fs.writeFile);

const readFile = util.promisify(fs.readFile);

class Storage {
    


}

module.exports = Storage();