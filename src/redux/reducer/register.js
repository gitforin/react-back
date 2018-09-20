const defaultState = 0;
export const finalValue = (state = defaultState, action) => {
  switch (action.type) {
    case 'increment':
      return state  + 10;
    case 'decrement':
      return state  - 10;
    default: 
      return state;
  }
};
