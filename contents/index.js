#! /usr/bin/env node
var shell = require('shelljs');
var userArgs = process.argv.slice(2);
var folderName = userArgs[0];
var Spinner = require('cli-spinner').Spinner;
var depSpin = new Spinner('Installing dependencies.. %s');
var spawn = require('child_process').spawn;
var commandsDep = [
  'cd ' + folderName,
  'npm init -y',
  'npm install --save babel-core babel-loader babel-preset-es2015 babel-preset-react react-dom react-redux redux webpack',
  'npm install --save-dev babel-preset-env webpack-dev-server'
];
var depChild = spawn(commandsDep.join(' && '), {
  shell: true
});

depSpin.setSpinnerString(18);

shell.mkdir(folderName);
shell.cd(folderName);

depSpin.start();
depChild.on('exit', () => {
  depSpin.stop();
  shell.exec('clear');
  console.log('Installing dependencies.. ✓');
})

shell.touch('webpack.config.js');
shell.mkdir(['build', 'frontend']);

shell.cd('frontend');
shell.mkdir(['components', 'containers', 'reducers', 'store']);
shell.touch('app.js');

shell.cd('containers');
shell.touch(['AppContainer.js', 'Root.js']);

shell.cd('../reducers');
shell.touch('index.js');

shell.cd('../store');
shell.touch('configureStore.js');