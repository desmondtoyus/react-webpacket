import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store'
// The component folder shoould hold unit it(component) using shallow, 
// while view folder does intergration test with 'mount'
import Footer from "../../app/components/Footer";

describe('Footer Component', () => {
      it('renders the component', () => {
        const wrapper = shallow(<Footer />);
        expect (wrapper.exists()).toBeTruthy();
      });
    });