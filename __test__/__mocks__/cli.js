const inquirer = require('inquirer');
 const {QUESTIONS} =require('../../contents/module')
 inquirer.prompt(QUESTIONS)
 .then((answers) =>{
  return`${answers['projectChoice']}`;
});
