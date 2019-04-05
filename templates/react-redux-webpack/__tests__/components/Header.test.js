import React from 'react';
import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store'
// The component folder shoould hold unit it(component) using shallow, 
// while view folder does intergration test with 'mount'
import Header from '../../app/components/Header';

describe('Header Component', () => {
      it('renders the component', () => {
        const wrapper = shallow(<Header />);
        expect (wrapper.exists()).toBeTruthy();
      });
  });