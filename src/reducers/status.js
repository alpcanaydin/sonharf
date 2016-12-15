import { GAME_STATUS_CHANGED } from '../actions/status';
import { GAME_OVER, USER_WON, RESTART_REQUESTED } from '../actions/game';

export default (state = 'init', {type, status}) => {
  switch (type) {
    case GAME_STATUS_CHANGED:
      return status;

    case RESTART_REQUESTED:
      return 'init';

    case GAME_OVER:
      return 'gameOver';

    case USER_WON:
      return 'gameWon';

    default:
      return state;
  }
};
