import { GET_TOKEN } from '../Action';

const INITIAL_STATE = '';

function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_TOKEN:
    return action.payload;

  default:
    return state;
  }
}

export default token;
