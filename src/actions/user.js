import { push } from 'react-router-redux';

export function createUser(name, band) {
  return (dispatch) => {
    dispatch(push('/list'));
    dispatch({
      type: 'CREATE_USER',
      user: {name, band},
    })
  }
}