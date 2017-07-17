import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from '../Feed/Feed.js';
import About from '../About/About.js';
import License from '../License/License.js';





const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Feed}/>
      <Route path="/about" component={About}/>
      <Route path="/license" component={License}/>
    </Switch>
  </main>
)

export default Main;
