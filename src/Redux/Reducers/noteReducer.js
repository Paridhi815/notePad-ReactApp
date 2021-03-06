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
      notes.push(action.payload); // action.payload me ek note hai
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
    case 'GET_NOTES': {
      const notes = action.payload;
      return {
        ...previousState,
        notes,
      };
    }
    default: {
      return previousState;
    }
  }
};

export default noteReducer;
