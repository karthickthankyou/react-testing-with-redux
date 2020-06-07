import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'root';


let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['comment 1', 'comment 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount();
})

it('one li per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
})

it('Comment renders in li properly', () => {
  expect(wrapped.render().text()).toContain('comment 1')
  expect(wrapped.render().text()).toContain('comment 2')
})
