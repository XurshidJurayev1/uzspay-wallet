export const error = (state = {}, action) => {
  switch (action.type) {
    case 'ERROR' :
      return action.payload;
    case 'CLEAR_ERROR' :
      return {};
    default:
      return state;
  }
};

export const send = (state = '', action) => {
  switch (action.type) {
    case 'SEND' :
      return action.payload;
    default:
      return state;
  }
};

export const check = (state = {}, action) => {
  switch (action.type) {
    case 'CHECK' :
      return action.payload;
    default:
      return state;
  }
};

export const createNew = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_NEW_USER' :
      return action.payload;
    default:
      return state;
  }
};

export const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN' :
      return action.payload;
    default:
      return state;
  }
};


