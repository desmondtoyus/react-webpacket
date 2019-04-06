import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
// import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store'
// The component folder shoould hold unit test(component) using shallow,
// while view folder does intergration test with 'mount'
import Table from '../../app/components/Table';

let mockContent = [
  {
    id: 1, name: 'Desmondjhjhhj', date: 'Nov 4 1998', email: 'desmondkjjkjh@pilotx.tv', plan: 'opoCustom',
  },
  {
   id: 2, name: 'Desmond2,klk', date: 'Nov 4 1955', email: 'desmond2l;;l@pilotx.tv', plan: 'kjpaid',
  },
  {
    id: 3, name: 'Desmondjhjhhj', date: 'Nov 4 1998', email: 'desmondkjjkjh@pilotx.tv', plan: 'opoCustom',
  },
  {
    id: 4, name: 'Desmond2,klk', date: 'Nov 4 1955', email: 'desmond2l;;l@pilotx.tv', plan: 'kjpaid',
  },
];

describe('Table Component', () => {
  test('renders correctly the table component', () => {
    const wrapper = shallow(<Table label="Test label" />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders Table component', () => {
    const wrapper = renderer.create(<Table label="Test Table" content={mockContent} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });


  it('renders text in the right possition', () => {
    const wrapper = mount(<Table label="Test label" content={mockContent} />);
    // Expect the child of the first item to be an array
    expect(wrapper.find('td').get(1).props.children).toEqual('Desmondjhjhhj');
  });

  it('render table correctly with empty props', () => {
    mockContent = [];
    const wrapper = mount(<Table label="Test label" content={mockContent} />);
    expect((wrapper).prop('content')).toHaveLength(0);
  });

  // Testing  whether component rerenders when the state changes
  test('rerenders when the state changes', () => {
    mockContent = [{
      id: 1, name: 'Ademiluyi', date: 'Dec 30 1996', email: 'OlaifeOluwa@gmail.com', plan: 'Full',
    }];
    const wrapper = shallow(<Table label="Test label" content={mockContent} />);
    wrapper.setProps({
      content: [{
        id: 2, name: 'Desmond', date: 'Dec 30 1996', email: 'OlaifeOluwa@gmail.com', plan: 'Full',
      }],
    });
    console.log(wrapper);
    expect(wrapper.contains(<td>Desmond</td>)).toBeTruthy();
  });
});
