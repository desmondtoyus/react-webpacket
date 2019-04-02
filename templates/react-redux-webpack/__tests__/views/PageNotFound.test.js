import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store'

import PageNotFound from "../../app/views/PageNotFound";

describe('<PageNotFound />', () => {
      it('renders the component', () => {
        const wrapper = shallow(<PageNotFound />);
        expect (wrapper.exists()).toBeTruthy();
      });
      it('Should contain a description', ()=>{
        const wrapper = shallow(<PageNotFound />);
        expect(wrapper.find('h1')).toHaveLength(1)
    })
    it('Should have title', ()=>{
        const wrapper = shallow(<PageNotFound/>);
        expect(wrapper.contains(<h1> PAGE NOT FOUND </h1>)).toBeTruthy();
    });

  

  });