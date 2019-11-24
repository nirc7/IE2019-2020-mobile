import React, { Component } from 'react';


export default class CCCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt1: 12,
            txt2: '',
            sum: null
        };
    }

    txtChanged1 = (e) => {
        console.log('e=' +  e.target.value);
        let num =  parseInt(e.target.value);
        if (0 <= num &&  num <= 100) {
            this.setState({
                txt1:num
            });
        }
    }

    txtChanged2 = (e) => {
        this.setState({
            txt2: parseInt(e.target.value)
        });
    }

    btnAdd = () => {
        this.setState({
            sum: this.state.txt1 + this.state.txt2,
            txt1: '123'
        });
        // this.setState( (prev)=> {
        //     sum: prev.sum  + this.state.txt1 + this.state.txt2
        // });
        this.props.sendData(7);
    }

    componentDidMount() {

    }

    render() {

        let name = ''
        if (this.state.sum === 5) {
            name = 'chalrie'
        }

        return (
            <div>
                <h1>calculator</h1>
                num1:<input type="text" onChange={this.txtChanged1} value={this.state.txt1} /> <br />
                num2:<input type="text" onChange={this.txtChanged2} /> <br />
                <button onClick={this.btnAdd}>+</button>
                <div>{this.state.sum}</div>
                {this.state.sum === null ? <div>start</div> : <div>end</div>}
                {this.state.sum == 5 && <div>avi</div>}
                name={name}
            </div>
        );
    }
}
