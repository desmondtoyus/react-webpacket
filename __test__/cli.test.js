'use strict';
const inquirerTest = require('inquirer-test');
const ENTER = inquirerTest.ENTER;
const cliPath = __dirname + '/__mocks__/cli.js';

describe('CLI TEST', function(){
  test('should accept user input', () => {
    return inquirerTest([cliPath], [ENTER, 'home', ENTER, 'auth', ENTER]).then((data) => {
      expect(data).toContain('react-redux-webpack')
    });
    
  });
  test('should match snap shot', () => {
    return inquirerTest([cliPath], [ENTER, 'home', ENTER, 'auth', ENTER]).then((data) => {
      expect(data).toMatchSnapshot()
    });
    
  });
})

