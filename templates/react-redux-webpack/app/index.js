import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './scss/app.scss';
// eslint-disable-next-line
import '!file-loader?name=[name].[ext]!./assets/images/favicon.png'; // load favicon and dont change the name
import store from './store';
import * as serviceWorker from './serviceWorker';


// export const store = createStore(configureStore, {}, composeWithDevTools(applyMiddleware(...middleware)));
const MOUNT_NODE = document.getElementById('react-container');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, MOUNT_NODE,
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
};

if (module.hot) {
  // Hot reloadable React components and translation json files modules.hot.accept
  // does not accept dynamic dependencies, have to be constants at compile-time
  module.hot.accept(['App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
render();
