import React from 'react';
import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './pages/about';
import Menu from './pages/menu';
import Events from './pages/events';
import Chefs from './pages/chefs';
import Contact from './pages/contact';
import Gallery from './pages/gallery';

function App() {

  return (
 
    <Router>
    <Switch>
  

      <Route path="/gallery"  component={Gallery}/>
      <Route path="/contact"  component={Contact}/>
      <Route path="/events"  component={Events}/>
      <Route path="/chefs"  component={Chefs}/>
      <Route path="/about"  component={About}/>
      <Route path="/menu"  component={Menu}/>

      <Route path="/"  component={Home}/>
     
  </Switch>
</Router>
  


  )
}

export default App;
