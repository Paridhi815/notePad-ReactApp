const defaultState = {
  count: 0,
};
  // reducer
const counter = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...prevState, count: prevState.count + 1 };
    }
    case 'DECREMENT': {
      return { ...prevState, count: prevState.count - 1 };
    }
    default: {
      return prevState;
    }
  }
};

export default counter;

