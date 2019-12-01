import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import MenuUserComponent from './Components/MenuUserComponent';



function App(props) {

  var userObj = {
    userId: 17,
    userName: 'avi'
  };

  function gotomuc7() {
    props.history.push({
      pathname: '/muc/7',
      search: '?query=abc',
      state: { userObj: userObj }
    });

  }

  return (
    <div>
      <div>
        <Link to="/">home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/menu">Menu</Link> |
        <Link to="/muc/8">Menu8</Link>
      </div>
      <div>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu" >
            <Menu />
          </Route>
          <Route path="/muc/:userId" component={MenuUserComponent} />
        </Switch>
      </div>
      <button onClick={gotomuc7} >muc 7</button>
      <div>FOOTER</div>
    </div>
  );
}

export default withRouter(App);
