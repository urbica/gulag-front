export const VIEWPORT_CHANGED = '@@map/VIEWPORT_CHANGED';
export const changeViewport = newViewport => ({
  type: VIEWPORT_CHANGED,
  payload: newViewport
});
