import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import TopNav from './components/Navbar'
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="App">
      <div>
      <TopNav />
    </div>
    <div>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
    </div>
  );
}

export default App;
