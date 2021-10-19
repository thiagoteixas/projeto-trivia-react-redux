// Arquivos onde serão colocadas todas as actions.
// md5(emailDoUsuário).toString()
const QUESTION_EP = 'https://opentdb.com/api.php?amount=5';

export const PLAY = 'PLAY';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_QUESTIONS = 'GET_QUESTIONS';

const state = { player: {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
} };

const playAction = (payload) => {
  state.player = { ...state.player, ...payload };
  localStorage.setItem('state', JSON.stringify(state));
  return { type: PLAY, payload };
};

export default playAction;

const tokenAction = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export const questionAction = (payload) => ({
  type: GET_QUESTIONS,
  payload,
});

export const getTokenThunk = () => async (dispatch) => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const responseJson = await response.json();
  console.log(responseJson);
  localStorage.setItem('token', responseJson.token);
  dispatch(tokenAction(responseJson.token));
};

export const getQuestionsThunk = (token) => async (dispatch) => {
  console.log(token);
  const response = await fetch(`${QUESTION_EP}&token=${token}`);
  const responseJson = await response.json();
  console.log(responseJson.results);
  dispatch(questionAction(responseJson.results));
};
