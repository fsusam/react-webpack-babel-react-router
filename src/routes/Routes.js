import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';

let Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
    );    
  };

  export default Routes;