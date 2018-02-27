const Models = require('../../models');

const handler = (request, response) => {
  console.log(request.payload, '----------');
  // console.log(JSON.parse(request.payload), '**');
  const noteList = JSON.parse(request.payload);
  // noteList = noteList.slice(1);
  let newNoteList;
  if (noteList != null) {
    newNoteList = noteList.map(note => ({
      title: note.title,
      content: note.content,
      noteid: note.noteId,
    }));
  }
  Models.notes.destroy({ truncate: true });
  Models.notes.bulkCreate(newNoteList)
    .then(() => response('Notes Synced to DB'))
    .catch(() => response('Internal Server Error'));

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

