'use strict';
const inquirerTest = require('inquirer-test');
const ENTER = inquirerTest.ENTER;
const cliPath = __dirname + '/mock/cli.js';

describe('CLI TEST', function(){
  test('should accept user input', () => {
    return inquirerTest([cliPath], [ENTER, 'home', ENTER, 'auth', ENTER]).then((data) => {
      expect(data).toContain('home')
    });
    
  });
  test('should match snap shot', () => {
    return inquirerTest([cliPath], [ENTER, 'home', ENTER, 'auth', ENTER]).then((data) => {
      expect(data).toMatchSnapshot()
    });
    
  });
})

