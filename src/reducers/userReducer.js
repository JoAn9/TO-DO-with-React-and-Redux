import initialState from './initialState';

export default function userReducer(state = {user: {name: '', band: ''}}, action) {
  switch(action.type) {
    case 'CREATE_USER':
    return {
      ...state,
      user: {name: action.user.name, band: action.user.band}
    };
    default: return {
      ...state,
    };
  }
}