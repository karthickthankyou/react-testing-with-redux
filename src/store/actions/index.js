import { SAVE_COMMENT } from 'store/actions/types';

export const saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment
})