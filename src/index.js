import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CreateVideo from './pages/Create/Video'
import CreateCategory from './pages/Create/Category';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/create/video" component={CreateVideo} />
      <Route path="/create/category" component={CreateCategory} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
