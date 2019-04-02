import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store'
// The component folder shoould hold unit it(component) using shallow, 
// while view folder does intergration test with 'mount'
import Jumbotron from "../../app/components/Jumbotron";

describe('Jumbotron Component', () => {
      it('renders the component', () => {
        const wrapper = shallow(<Jumbotron />);
        expect (wrapper.exists()).toBeTruthy();
      });

      it('Should contain a description', ()=>{
          const  wrapper = shallow(<Jumbotron />)
          expect(wrapper.find('h1')).toHaveLength(1)
      })
    });