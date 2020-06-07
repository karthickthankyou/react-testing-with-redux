import React from 'react'
import ReactDOM from "react-dom";
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { shallow } from 'enzyme';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it('does not crash', () => {
  // This basic rendering makes sure that the component does not crash.

  // The below document is provided by JSDOM not the real browser.
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // Clean up. This improves the performance as we unmount any unused components objects dangling around.
  ReactDOM.unmountComponentAtNode(div);
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
})
