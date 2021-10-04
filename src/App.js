
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Cart from './Components/Cart/Cart';
import Notefound from './Components/Notefound/Notefound';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div className='text-center'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/cart'>
            <Cart></Cart>
          </Route>
          <Route path="*">
            <Notefound></Notefound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
};

export default App;