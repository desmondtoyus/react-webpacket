import React from 'react';
import { shallow, mount } from 'enzyme';
import { render } from 'react-testing-library';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store'

import About from "../../app/views/About";

describe('<About/>', () => {
      it('renders the component', () => {
        const wrapper = shallow(<About/>);
        expect (wrapper.exists()).toBeTruthy();
      });
      it('Should contain a description', ()=>{
        const wrapper = shallow(<About/>);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('Should have title', ()=>{
        const wrapper = shallow(<About/>);
        expect(wrapper.contains(<h1>About Page!</h1>)).toBeTruthy();
    })
  });