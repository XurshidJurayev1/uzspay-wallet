export const send = (state = '', action) => {
  switch (action.type) {
    case 'SEND' :
      return action.payload;
    default:
      return state;
  }
};