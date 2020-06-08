import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'store/actions/types';

export const saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment
})


export const fetchComments = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');
  console.log(response);

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}
