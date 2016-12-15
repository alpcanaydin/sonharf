export const MICROPHONE_STATUS_CHANGED = 'MICROPHONE_STATUS_CHANGED';

export const microphoneStatusChanged = status => ({
  type: MICROPHONE_STATUS_CHANGED,
  status
});
