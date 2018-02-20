const getNotes = require('./getNotesFromDb');
const putNotes = require('./putNotesToDb');

module.exports = [].concat(getNotes, putNotes);
