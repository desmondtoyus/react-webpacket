
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from "../../app/App";


describe("App", () => {
	it("renders without crashing", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.length).toEqual(1);
	});
});