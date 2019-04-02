'use strict'
const modules = require('./../contents/module');
const home = `import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home description" />
        </Helmet>
        <h1>HOME Page!</h1>

      </div>
    );
  }
}

export default Home`;
// const helperFunction = require('./practiceProblem').helperFunction;
describe('viewTemplate', function () {
    it('Shouls exist', function () {
        expect(modules.viewTemplate).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.viewTemplate).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.viewTemplate('home');
        expect(result).toMatchSnapshot();
    });
    it('should return error', function () {
        expect(modules.viewTemplate()).toThrowErrorMatchingSnapshot()
    });

});