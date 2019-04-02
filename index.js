#!/usr/bin/env node
'use strict';
const inquirer = require('inquirer');
const shell = require('shelljs');
const fs = require('fs');
const CURR_DIR = process.cwd();
const {viewTemplate,  actionTemplate, reducerTemplate, rootReducers, configStore, addActionToType, createApp, pageUrls } = require('./contents/module');
const CHOICES = fs.readdirSync(`${__dirname}/templates`);
const QUESTIONS = [
  {
    name: 'projectChoice',
    type: 'list',
    message: 'Select react-redux-webpack project. ',
    choices: CHOICES 
},
    {
         when : function( answers ) {
        if (answers['projectChoice'] === "react-webpack") {
            return answers.projectChoice;
        }
      }
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
  },
  {
    name: 'reactRedux',
    type: 'input',
    message: 'Redux Reducers (Separated by a space, Enter to Ignore):',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else if (/^$|\s+/.test(input)) return true;
      else return 'Only letters, numbers, underscores and hashes are allowed, press Enter to esc.';
    }
  },
];

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectChoice = answers['projectChoice'];
    const projectName = process.argv[2] || 'wepacket_app';
    const templatePath = `${__dirname}/templates/${projectChoice}`;
    const views = answers['views'];
    const reactRedux = answers['reactRedux'];
    
    if (!fs.existsSync(`${CURR_DIR}/${projectName}`)){
      fs.mkdirSync(`${CURR_DIR}/${projectName}`);
    }
    else{
      console.log(`Error: file may already exists`);
      return;
    }
    createDirectoryContents(templatePath, projectName, views, reactRedux);
    createUserSpecifiedContent(templatePath, `${CURR_DIR}/${projectName}`, views, reactRedux);
  });

  function createDirectoryContents (templatePath, newProjectPath, views, reducers) {
    const filesToCreate = fs.readdirSync(templatePath);
  
    filesToCreate.forEach(file => {
      const origFilePath = `${templatePath}/${file}`;
      
      // get stats about the current file
      const stats = fs.statSync(origFilePath);
  
      if (stats.isFile()) {
        const contents = fs.readFileSync(origFilePath, 'utf8');
        
        // Rename
        if (file === '.npmignore') file = '.gitignore';
        const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
        fs.writeFileSync(writePath, contents, 'utf8');
      } else if (stats.isDirectory()) {
        fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
        
        // recursive call
        createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
      }
    });
  }
  
  
  function createUserSpecifiedContent(templatePath, newProjectPath, views, reducers) {
    const viewsToCreate = views.trim().split(' ').filter(distinctValue);
    const reducersToCreate = reducers.trim().split(' ').filter(distinctValue);
    createSpecifiedContents(viewsToCreate, 'views', newProjectPath);
    createSpecifiedContents(reducersToCreate, 'reducers', newProjectPath);
    createSpecifiedContents(reducersToCreate, 'actions', newProjectPath);
    storeContents(reducersToCreate, `${newProjectPath}/app/redux/`);
    createTypes(reducersToCreate, `${newProjectPath}/app/redux/actions`);
    createPageUrls(viewsToCreate, `${newProjectPath}/app/components`);
    createAppRoutes(viewsToCreate, `${newProjectPath}/`);
 
  }

function createSpecifiedContents(viewLists, type, location) {
  let localPath;
  let action;
  let extention=``
  switch (type) {
    case 'views':
      localPath = `${location}/app/views`;
      action = viewTemplate;
      
      break;
      case 'reducers':
      localPath = `${location}/app/redux/reducers`;
      action = reducerTemplate;
      extention ='.reducer';
      break;
      case 'actions':
      localPath = `${location}/app/redux/actions`;
      action = actionTemplate;
      extention ='.action';
      break;
    default:
      break;
  }
  viewLists.map((name, index)=>{
    fs.writeFile(`${localPath}/${name.toLowerCase()}${extention}.js`, action(name), 'ascii',
    // callback function that is called after writing file is done
    function(err) { 
        if (err) throw err;
        // if no error
        console.log(`created.. ✓ /app/view/${name.toLowerCase()}${extention}.js`)
      });

  });
}  
// rootReducers, configStore
function storeContents( reducers, location){
    fs.writeFile(`${location}reducers/index.js`, rootReducers(reducers), 'ascii',
  // callback function that is called after writing file is done
  function(err) { 
      if (err) throw err;
      // if no error
      console.log(`created.. ✓ /app/redux/reducers/index.js`)
    });

    fs.writeFile(`${location}/configureStore.js`, configStore(reducers), 'ascii',
  // callback function that is called after writing file is done
  function(err) { 
      if (err) throw err;
      // if no error
      console.log(`Store created.. ✓ /app/redux/configureStore.js`)
    });

};
function createTypes (reducers, location){
  fs.writeFile(`${location}/types.js`, addActionToType(reducers), 'ascii',
  // callback function that is called after writing file is done
  function(err) { 
      if (err) throw err;
      // if no error
      console.log(`created.. ✓ /app/redux/action/types.js`)
    });
  
}

function createPageUrls(views, location){
  fs.writeFile(`${location}/utils.js`, pageUrls(views), 'ascii',
  // callback function that is called after writing file is done
  function(err) { 
      if (err) throw err;
      // if no error
      console.log(`created.. ✓ /app/component/utils.js`)
    });
  
}


function createAppRoutes(views, location) {
  fs.writeFile(`${location}/app/App.js`, createApp(views), 'ascii',
  // callback function that is called after writing file is done
  function(err) { 
      if (err) throw err;
      // if no error
      console.log('Installing dependencies.. ');
      shell.cd(location);
      // Bash command for simulating process loading
      shell.exec(`npm i & PID=$! #simulate a long process
      echo "This may take a while, please be patient while we install your dependencies.."
      printf "["
      # While process is running...
      while kill -0 $PID 2> /dev/null; do 
          printf  "▓"
          sleep 1
      done
      printf "] Dependencies Installed.. ✓ "`);
        shell.echo('Running linter...');
        shell.exec('./node_modules/.bin/eslint  --fix .');
        shell.echo('starting app in development mode...');
        if(shell.exec('npm run start').code !== 0){
          shell.echo('Info: App Stopped.');
          shell.exit(1);
        }
    });
  
}
function distinctValue(value, index, self) { 
  return self.indexOf(value.toLowerCase()) === index;
}

