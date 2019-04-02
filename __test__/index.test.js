'use strict';

var inquirer = require('inquirer');
var mocki = require('../contents/inquirer-mock-prompt');

// The mock is automatically removed after the answers are returned.
it('work should be false', async t => {
  mocki({
    work: false
  });
  const answers = await inquirer.prompt({
    type: 'confirm',
    name: 'work',
    default: true
  });
  t.is(answers.work, false); // => true
});

// You can even mock multiple times
it('work should be false', async t => {
  mocki({
    work: false
  });
  mocki({
    text: 'cool'
  });

  let answers1 = await inquirer.prompt({
    type: 'confirm',
    name: 'work',
    default: true
  });
  t.is(answers.work, false); // => true
  answers = await inquirer.prompt({
    type: 'input',
    name: 'text',
  });
  t.is(answers.text, 'cool'); // => true
});