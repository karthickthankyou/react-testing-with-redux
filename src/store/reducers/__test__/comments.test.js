import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('save comment reducer works fine', () => {
  const comment = 'new comment';
  const action = {
    type: SAVE_COMMENT,
    payload: comment
  }
  const newState = commentsReducer([], action);
  expect(newState.includes(comment)).toEqual(true);
})

it('save comment reducer works fine with unknown type', () => {
  const comment = 'new comment';
  const action = {
    type: "SAVE_COMMENT_2", // We dont have this type.
    payload: comment
  }
  const newState = commentsReducer([], action);
  expect(newState).toEqual([]);
})
