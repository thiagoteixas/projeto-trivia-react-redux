import { PLAY } from '../Action';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case PLAY:
    return { ...state, ...action.payload };

  default:
    return state;
  }
}

export default player;
