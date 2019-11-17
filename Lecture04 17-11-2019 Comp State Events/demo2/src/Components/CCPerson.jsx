import React, { Component } from 'react';

export default class CCPerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pName: 'default name',
            pAge: 20
        };
    }

    btn1=()=>{
        alert(1);
        this.setState({
            pAge : 30
        });
    }

    render() {
        console.log('in redner');

        return (
            <div>
                <div>CCPERson</div>
                <h4>{this.state.pName}</h4>
                <h4>{this.state.pAge}</h4>
                <button onClick={this.btn1} >btn1 CC</button>
            </div>
        );
    }
}