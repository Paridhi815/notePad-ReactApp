const defaultState = {
  notes: [],
  homepage: true,
  noteId: null,
};

const noteReducer = (previousState = defaultState, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case 'SAVE_NOTE': {
      const { notes } = previousState;
      notes[action.payload.noteId] = action.payload; // action.payload me ek note hai
      return {
        ...previousState,
        notes,
        homepage: false,
      };
    }
    case 'EDIT_NOTE': {
      const id = action.payload;
      return {
        ...previousState,
        noteId: id,
        homepage: true,
      };
    }
    case 'GO_BACK': {
      return {
        ...previousState,
        noteId: null,
        homepage: true,
      };
    }
    default: {
      return previousState;
    }
  }
};

export default noteReducer;
