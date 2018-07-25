import initialState from './initialState';

export default function userReducer(state = {user: {name: 'ho', band: 'ha'}}, action) {
  switch(action.type) {
    case 'CREATE_USER':
    return {
      ...state,
      user: action.user,
    };
    default: return {
      ...state,
    };
  }
}