const Models = require('../../models');

const handler = (request, response) => {
  Models.notes.findAll().then((notesObject) => {
    const notes = [];
    notesObject.forEach((noteObject) => {
      notes.push({
        title: noteObject.title,
        content: noteObject.content,
        noteId: noteObject.noteid,
      });
    });
    console.log(notes);
    response(JSON.stringify(notes));
  });
};

module.exports = {
  path: '/getNotes',
  method: 'GET',
  handler,
};

