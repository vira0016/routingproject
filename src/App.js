import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import user from './components/user.js';
import todos from './components/todos.js';
import post from './components/post.js';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
        
        <Route exact path="/" component={user} />
        <Route path="/todos" component={todos} />
        <Route path="/post" component={post} />
        
        
        </Switch>
        
        
        </BrowserRouter>
     
    );
  }
}

export default App;
