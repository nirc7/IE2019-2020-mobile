import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import logo from './logo.svg';
import './App.css';
import ChildCopmponent from './ChildCopmponent';
import FormDemo  from './FormDemo';
import RefsDemo  from './RefsDemo';
import WORefsDemo  from './WORefsDemo';


// function Student(props) {
//   //props.name="stam"; ERROR IMMUTABLE!
//   var number;
//   function txtChenged(e) {
//     number = e.target.value;
//   }

//   function btnClicked() {
//     alert(number);
//   }

//   return (
//     <div className="container">
//       <h3>hello my name is {props.name} </h3>
//       <h4>and i am a student</h4>

//       <button
//         onClick={btnClicked}
//         className="btn btn-default" >show number</button>

//       <input type="text"
//         placeholder="insert your number"
//         onChange={txtChenged} />
//     </div>);
// }

class Student extends Component {
  constructor(props) {
    super(props);
    var rnd = Math.round(Math.random() * 40 + 60);
    this.state = {
      grade: rnd,
      orgGrade: rnd,
    };
    //alert('constructor ' + this.props.name);
    this.number = 8;
    this.txtChanged = this.txtChanged.bind(this);
    this.btnClicked2 = this.btnClicked2.bind(this);

    this.numbers = [1, 2, 3, 4, 5];
    this.listNumbers = this.numbers.map((number) =>
      <a href="#" className="list-group-item" key={number}>{number * 2}</a>
    );

    this.list = ["avi", "benny", "charlie"];
    this.listAsLi = this.list.map((name, index) =>
      <a href="#" className="list-group-item" key={index}>{index +": hello " + name + "!"}</a>
    );
  }
  txtChanged(e) {
    this.number = e.target.value;
  }

  btnClicked1() {
    alert('your number is: ' + this.number);
    //alert('btn ' + this.props.name);
  }

  btnClicked2() {
    alert('your number is: ' + this.number);
    //alert('btn ' + this.props.name);
  }

  btnClicked3 = () => {
    alert('your number is: ' + this.number);
    //this.state += this.number; //ERROR try to change the state directly
    //opt1
    //this.setState({grade: this.state.grade + parseInt(this.props.bonus)});
    //op2 -better because deals with async - and preffered
    this.setState((prevState, props) =>
      ({ grade: prevState.grade + parseInt(props.bonus) }));
    //opt3 - better because deals with async
    // this.setState(function (prevState, props) {
    //   return {
    //     grade: prevState.grade + parseInt(props.bonus)
    //   };
    // });
  }

  btnClicked4() {
    alert('your number is: ' + this.number);
    //alert('btn ' + this.props.name);
  }

  getData = (data) => {
    alert("alert from parent with child data: " + data);
  }

  componentDidMount() {
    //console.log('componentDidMount ' + this.props.name);
    //alert('componentDidMount ' + this.props.name);
    this.setState((prevState, props) =>
      ({ grade: prevState.grade + parseInt(props.bonus) }));
  }

  componentWillUnmount() {
    debugger;
    console.log('componentWillUnmount ' + this.props.name);
    alert('componentWillUnmount ' + this.props.name);
  }

  render() {

    // var numbers = [1, 4, 9];
    // var roots = numbers.map(Math.sqrt);
    // console.log(roots);

    // var powers = numbers.map(function (num) { return num * num; });
    // console.log(powers);

    // var names = ["avi", "benny", "charlie"];
    // var helloNames = names.map((name) => {
    //   alert(name);
    //   return name + "!"
    // });
    // console.log(helloNames);

    return (
      <div className="container">
        <h3>hello my name is {this.props.name} </h3>
        <h4>my original grade was: {this.state.orgGrade}</h4>
        <h4>my grade with bonus is: {this.state.grade}</h4>

        <input type="button"
          value="show number"
          onClick={this.btnClicked1.bind(this)}
          className="btn btn-defalut" />

        <input type="button"
          value="show number2"
          onClick={this.btnClicked2}
          className="btn btn-defalut" />

        <input type="button"
          value="show number3"
          onClick={this.btnClicked3}
          className="btn btn-defalut" />

        <input type="button"
          value="show number4"
          onClick={() => this.btnClicked4()}
          className="btn btn-defalut" />

        <input type="text"
          placeholder="insert your number"
          onChange={this.txtChanged} />
        <br />
        <a href="http://walla.co.il">walla</a>
        <br />
        <ChildCopmponent sendData={this.getData} />

        <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
        <div className="list-group" style={{ width: "20%" }}>{this.listAsLi}</div>
        <p style={{ fontWeight: "bold", margin: 10 }}>numbers list:</p>
        <div className="list-group" style={{ width: "20%" }}>{this.listNumbers}</div>
      </div>
    );
  }
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  bonus:PropTypes.number.isRequired
};

const App =
  <div>
    <WORefsDemo/>
    <RefsDemo />
    <FormDemo  />
    <Student name="benny"  />
    <Student name="charlie" bonus="3" />
    <Student name="dora" bonus={4} />
  </div>;
export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.btnClicked = this.btnClicked.bind(this);
//   }

//   btnClicked()
//   ;{
//     let num = 1;
//     for (let i = 0; i < 1000; i++) {
//       num *= Math.random() + 1;
//     }
//     console.log(num);
//     alert(num);
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div className="c1" onClick={this.btnClicked} >nir</div>
//         <div className="c2" onClick={this.btnClicked} >nir</div>
//         <div className="btn btn-danger" onClick={this.btnClicked} >nir</div>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div className="jumbotron">
//         <h1 className="display-3">Hello, world!</h1>
//         <p className="lead">From out React Course:)</p>
//         </div>
//       </div>      
//     );
//   }
// }


