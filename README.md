# React-Webpacket

React-webpacket by is a JavaScript library for dealing with the frustration of configuring and setting up react, redux and webpack environment. React-webpacket automatically sets up your react, redux and webpack app environment, no need to bother with redux configuration, webpack settings, eslint and other petty stuff. Avoid unnecessary time wasting and jump straight into doing what you love ♥ - coding. Visit webpacket.org for more information.

## Installation

Use the npm package manager to install react-webpacket.

```bash
sudo npm install -g react-webpacket
or
yarn global add react-webpacket
```

## Usage
```node
react-webpacket [project name]
Eg. react-webpacket todo_app -> will create a folder 'todo_app' and add all 
    the necessary files to the folder.
follow the prompt
1. Select react-redux-webpack [press Enter]
2. Enter names of your views (your App pages), separated by a space.
3. Enter names of your redux reducers (separated by a space), actions, 
    reducers and a store are automatically created for these reducers.
4. React-webpacket automatically installs dependencies, fix eslint  and run tests.
5. The App then hot reloads in the browser with your pages and redux combinereducers, actions and store.
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)