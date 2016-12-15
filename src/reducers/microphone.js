import { MICROPHONE_STATUS_CHANGED } from '../actions/microphone';
import { RESTART_REQUESTED } from '../actions/game';

export default (state = 'init', {type, status}) => {
  switch (type) {
    case MICROPHONE_STATUS_CHANGED:
      return status;

    case RESTART_REQUESTED:
      return 'init';

    default:
      return state;
  }
};
