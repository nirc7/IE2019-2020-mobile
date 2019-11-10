import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import MenuComponent from './MenuComponent';

class App extends Component {

  btnAbout = () => {
    alert(1);
    this.props.history.push({
      pathname: '/about/'
    });

  }
  
  render() {
    return (

        <div>nir <br /><br /><br />
          <button onClick={this.btnAbout}>About2</button>
          <br /><br />
          <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={MenuComponent} />
      </div>

    );
  }
}

export default withRouter(App);
