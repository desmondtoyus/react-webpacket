
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
// make sure to import your connected component, not your react class
import ConnectedSamplePage, {} from '../../app/views/SamplePage';
import store from '../../app/store';


describe('ConnectedSamplePage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <ConnectedSamplePage />
        </Router>
      </Provider>,
    );
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
  it('it should call changeInput', () => {
    wrapper.find('#search').simulate('change', {
      target: { value: 'Desmond', name: 'search' },
    });
    expect(wrapper.find('#search').props().value).toEqual('Desmond');
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
  it('When the Search button is clicked, the table is Rendered with the correct data', () => {
    wrapper.find('#search').simulate('change', {
      target: { value: 'Desmond', name: 'search' },
    });
    wrapper.find('#search-btn').simulate('click', { });
    expect(wrapper.contains(<td>Desmond</td>)).toBeTruthy();
  });
  it('When the input field is empty, the error block is rendered', () => {
    wrapper.find('#search').simulate('change', {
      target: { value: '', name: 'search' },
    });
    wrapper.find('#search-btn').simulate('click', {});
    expect(wrapper.contains(<span> Input Error</span>)).toBeTruthy();
  });
});
