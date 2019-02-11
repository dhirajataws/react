import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders App with nav and section', () => {
  let appPage = mount(<App />);
  expect(appPage.find('div').find('nav').find('a').at(0).text()).toEqual('Home');
  expect(appPage.find('div').find('nav').find('a').at(1).text()).toEqual('Search');
  expect(appPage.find('div').find('section').text()).toEqual('Body');

});