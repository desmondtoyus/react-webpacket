
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { initialStateMock } from '../../__mocks__/stateMock';
// make sure to import your connected component, not your react class
import SamplePage from '../../app/views/SamplePage';


describe('SamplePage', () => {
  const mockState = initialStateMock;
  const mockStore = configureStore([thunk]);
  const store = mockStore(mockState);
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <SamplePage />
      </MemoryRouter>
    </Provider>,
  );

  it('renders the component', () => {
    const wrapper2 = shallow(<Provider store={store}>
      <MemoryRouter>
        <SamplePage />
      </MemoryRouter>
    </Provider>);
    expect(wrapper2.exists()).toBeTruthy();
  });

  it('Should render component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('Should contain className', () => {
    expect(wrapper.find('input').hasClass('searches')).toBe(true);
  });
  it('Should have page title', () => {
    expect(wrapper.find('.heading').text()).toBe('Sample Page');
  });
  it('Should contain Search Button', () => {
    expect(wrapper.containsMatchingElement(<button type="submit">Search</button>)).toBe(true);
  });
  it('When Search button is clicked, the event is cancelled', () => {
    let prevented = false;
    wrapper.find('#search-btn').simulate('click', {
      preventDefault: () => {
        prevented = true;
      },
    });
    expect(prevented).toBeTruthy();
  });
});
