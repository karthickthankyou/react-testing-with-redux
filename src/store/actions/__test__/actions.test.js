import { SAVE_COMMENT } from 'store/actions/types';
import { saveComment } from '../index';

describe('save comment', () => {
  it('check type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  })
  it('check payload', () => {
    const action = saveComment('new comment');
    expect(action.payload).toEqual('new comment');
  })

  it('save comment action works fine', () => {
    const comment = 'new comment';

    const exp = {
      type: SAVE_COMMENT,
      payload: comment
    };

    const actual = saveComment(comment);
    expect(actual).toEqual(exp);
  })
})
