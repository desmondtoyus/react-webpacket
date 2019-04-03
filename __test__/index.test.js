'use strict';
import test from 'ava';
import run, { UP, DOWN, ENTER } from 'inquirer-test';

const cliPath = __dirname + '/mock/cli.js';
console.log('PATTHHH', cliPath);
test('press enter', async t => {
  const result = await run([cliPath], [ENTER, 'home']);
  t.regex(result, new RegExp('react-redux-webpack-home', 'g'));
});
// test('add input', async t => {
//   const result = await run([cliPath], 'home', ENTER);
//   t.regex(result, new RegExp('home', 'g'));
// });
