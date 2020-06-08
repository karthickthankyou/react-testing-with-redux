import React from 'react';
import { mount } from 'enzyme';
import Root from '../root';
import App from '../components/App';
import moxios from 'moxios';

let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {
        "name": "id labore ex et quam laborum",
      },
      {
        "name": "quo vero reiciendis velit similique earum",
      },
      {
        "name": "odio adipisci rerum aut animi",
      },
      {
        "name": "alias odio sit",
      }

    ]
  })

  afterEach(() => {
    moxios.uninstall();
  })

  wrapped = mount(
    <Root>
      <App />
    </Root>
  )
})



it(' can fetch list of comments and display', (done) => {
  wrapped.find('#btn-fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(4);
    done();
  })
});
