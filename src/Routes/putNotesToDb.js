const Models = require('../../models');

const handler = (request, response) => {
  console.log(JSON.parse(request.payload), '**');
  const noteList = JSON.parse(request.payload);
  const newNoteList = noteList.map(note => ({
    title: note.title,
    content: note.content,
    noteid: note.noteId,
  }));
  console.log(newNoteList);

  // for (let i = 0; i < noteList.length; i += 1) {
  //   Models.notes.upsert({
  //     title: noteList[i].title,
  //     content: noteList[i].content,
  //     noteid: noteList[i].noteId,
  //   });
  // }
  //   console.log('888', JSON.parse(request.payload), '888');
//   response(JSON.stringify());
//   });
};

module.exports = {
  path: '/putNotes',
  method: 'POST',
  handler,
};

