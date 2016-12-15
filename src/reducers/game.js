import {
  LAST_NAME_CHANGED,
  GAME_OVER,
  USER_WON,
  RESTART_REQUESTED
} from '../actions/game';

const initialState = {
  gameOver: false,
  gameOverReason: '',
  won: false,
  wonReason: '',
  score: 0,
  spokenWords: [],
  turn: 'computer',
  last: ''
};

export default (state = initialState, {type, from, last, reason}) => {
  switch (type) {
    case LAST_NAME_CHANGED:
      return Object.assign(
        {},
        state,
        {
          spokenWords: [ ...state.spokenWords, last ],
          last,
          turn: from === 'computer' ? 'user' : 'computer',
          score: from === 'user' ? ++state.score : state.score
        }
      );

    case GAME_OVER:
      return Object.assign(
        {},
        state,
        {
          gameOver: true,
          gameOverReason: reason
        }
      );

    case USER_WON:
      return Object.assign(
        {},
        state,
        {
          won: true,
          wonReason: reason
        }
      );

    case RESTART_REQUESTED:
      return initialState;

    default:
      return state;
  }
};
