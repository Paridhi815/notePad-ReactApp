const SAVE_NOTE = 'SAVE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const GO_BACK = 'GO_BACK';
const GET_NOTES = 'GET_NOTES';

export const saveNote = note => (
  {
    type: SAVE_NOTE,
    payload: note,
  }
);

export const editNote = noteId => ({
  type: EDIT_NOTE,
  payload: noteId,
});

export const goBack = () => (
  { type: GO_BACK }
);

export const getNotes = data => ({
  type: GET_NOTES,
  payload: data,
});
