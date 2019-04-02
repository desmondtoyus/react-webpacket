"use strict"
exports.viewTemplate = function (name) {
    const viewName = capitalizeFirstLetter(name.toLowerCase());
    return `import React from 'react';
    import { Helmet } from 'react-helmet';
    
    class ${viewName} extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
    
        };
      }
    
      render() {
        return (
          <div>
            <Helmet>
              <title>${viewName} </title>
              <meta name="description" content="${viewName} description" />
            </Helmet>
            <h1>${viewName.toUpperCase()} Page!</h1>
    
          </div>
        );
      }
    }
    
    export default ${viewName};`;
};

exports.reducerTemplate = function (name) {
    const reducerName = name.toUpperCase();
    return `import { ${reducerName} } from '../actions/types';

    const INITIAL_STATE = {
      name: '',
    };
    
    export default function (state = INITIAL_STATE, action) {
      switch (action.type) {
        case ${reducerName}:
          return {
            ...state,
            [action.prop]: action.value,
          };
        default:
          return state;
      }
    };`
}

exports.actionTemplate = function (name) {
    const reducerName = name.toUpperCase();
    const actionName = name.toLowerCase()
return `import { ${reducerName} } from './types';
    export const ${actionName}InputChange = ({ prop, value }) => (dispatch) => {
    dispatch({ type: ${reducerName}, prop, value });
};`
}


exports.rootReducers = function(reducers){
    let container=`import sampleReducer from './samplepage.reducer';  \n`;
    let reducersContainer =`
export {  sampleReducer, \n` 
    const close = `};`
    reducers.map((reducer, index)=>{
      if (reducer !== '') {
        container +=`import ${reducer.toLowerCase()}Reducer from './${reducer.toLowerCase()}.reducer'; \n`;
        reducersContainer +=` ${reducer.toLowerCase()}Reducer, \n`;
      }
        
    })
return container + reducersContainer + close ;
}

exports.configStore= function (reducers) {
return `import { combineReducers } from 'redux';
import {
    sampleReducer,
  ${listReducersPath(reducers)}
} from './reducers';

const configureStore = combineReducers({
sample: sampleReducer,
${listReducers(reducers)}
});
export default configureStore;`
}

exports.addActionToType = function(reducers) {
    let container= `export const INPUT_CHANGE = 'INPUT_CHANGE';
 export const FETCH_DATA = 'FETCH_DATA';\n`;
    reducers.map((reducer, index)=>{
      if (reducer !== '') {
        container +=`export const  ${reducer.toUpperCase()} = '${reducer.toUpperCase()}'; \n`;
    }
    });
    return container;
}

exports.createApp = function (views) {
return`import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SamplePage from './views/SamplePage';
${createRoutesPath(views)}
import PageNotFound from './views/PageNotFound';

const App = () => (
    <div className="App">
        <Helmet titleTemplate="%s - SiteName" defaultTitle="Some default title">
            <meta name="description" content="some description content"/>
        </Helmet>
        {/* BrowserRouter comes with default history */}
        <BrowserRouter>
            <div>
                <Header/>
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={SamplePage}/>
                        ${createRoutes(views)}
                        <Route path="" component={PageNotFound}/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    </div>
);

export default App;`
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createRoutes(views) {
    return views.map((view, index)=>{
      if (view !== '') {
        return  `            <Route exact path="/${view.toLowerCase()}" component={${capitalizeFirstLetter(view)}} /> \n` ;

      }
    }).join('');
}
function createRoutesPath(views) {
    return views.map((view, index)=>{
      if (view !== '') {
        return  `import ${capitalizeFirstLetter(view)} from './views/${view.toLowerCase()}'; \n`;
      }
     }).join('')
}
function listReducers(reducers){
    return reducers.map((reducer, index)=>{
      if (reducer !=='') {
        return  `${reducer.toLowerCase()} : ${reducer.toLowerCase()}Reducer, \n`;
      }
     }).join('');
}

function listReducersPath(reducers){
    return reducers.map((reducer, index)=>{
      if (reducer !=='') {
        return  `${reducer.toLowerCase()}Reducer, \n`;
      }
     }).join('');
}

exports.pageUrls =function (views) {
  return `
  import React from 'react';
  import { Link } from 'react-router-dom';
  const Views = () => (
    <div className="col-md-6">
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        My Pages</h3>
                </div>
                <ul className="list-group">
                <Link to="/" className="list-group-item active"> Sample Page </Link>
    ${fetchPageUrls(views)}
    </ul>
    </div>
</div>
  );
  export default Views;`
}

function  fetchPageUrls (views) {
  return views.map((view, index)=>{
    if (view !== '') {
      return  `<Link className="list-group-item active" to="/${view.toLowerCase()}"> ${capitalizeFirstLetter(view)} </Link>`
    }
  }).join('');
}

