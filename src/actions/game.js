export const LAST_NAME_CHANGED = 'LAST_NAME_CHANGED';
export const GAME_OVER = 'GAME_OVER';
export const USER_WON = 'USER_WON';
export const RESTART_REQUESTED = 'RESTART_REQUESTED';

export const lastNameChanged = (from, last) => ({
  type: LAST_NAME_CHANGED,
  from,
  last
});

export const gameOver = reason => ({
  type: GAME_OVER,
  reason
});

export const userWon = reason => ({
  type: USER_WON,
  reason
});

export const restartRequested = () => ({
  type: RESTART_REQUESTED
});
