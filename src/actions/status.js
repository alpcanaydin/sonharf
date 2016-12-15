export const GAME_STATUS_CHANGED = 'GAME_STATUS_CHANGED';

export const gameStatusChanged = status => ({
  type: GAME_STATUS_CHANGED,
  status
});
