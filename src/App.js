import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter, Route } from 'react-router-dom'

import reducers from './reducers';

import Login from './components/Login'
import ServiceForm from './components/ServiceForm'
import ReviewPage from './components/ReviewTable'
import Content from './components/Content'

// Apply Thunk middleware
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route path="/" exact component={Login} />
            <Route path="/content" component={Content} />
            <Route path="/servicepage" component={ServiceForm} />
            <Route path="/reviewpage" component={ReviewPage} />
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App
