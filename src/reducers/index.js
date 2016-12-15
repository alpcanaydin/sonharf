import {combineReducers} from 'redux';
import status from './status';
import microphone from './microphone';
import game from './game';

export default combineReducers({
  status,
  microphone,
  game
});
