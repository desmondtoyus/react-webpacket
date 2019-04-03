const inquirer = require('inquirer');
 
inquirer.prompt({
  type: 'list',
  name: 'projectChoice',
  message: 'Select react-redux-webpack project. ',
  choices: [ 'react-redux-webpack' ]
},
{
  name: 'views',
  type: 'input',
  message: 'Views (Separated by a space, Enter to Ignore):',
  validate: function (input) {
    if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
    else if (/^$|\s+/.test(input)) return true;
    else return 'Only letters, numbers, underscores and hashes are allowed, press Enter to esc.';
  }
}
).then(function(answers) {
  console.log(`${answers['projectChoice']}-${answers['views']}`);
});
