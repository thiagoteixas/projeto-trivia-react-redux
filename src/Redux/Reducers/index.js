// Arquivo onde serão importados todos os Reducers colocadas e combinados com o CombineReducers
// Os outros reducers ficarão em arquivos diferentes com o mesmo nome do reducer

import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import questions from './questions';

const rootReducer = combineReducers({ player, token, questions });

export default rootReducer;
