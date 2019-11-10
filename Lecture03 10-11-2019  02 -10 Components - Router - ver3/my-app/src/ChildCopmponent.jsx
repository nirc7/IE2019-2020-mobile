import React, { Component } from 'react';

export default class ChildComponent extends Component {
    btnClicked = ()=> {
        this.props.sendData('from child ' +new Date().getSeconds());
    }

    render() {
        return (
        <div style={{border: "solid 2px black", width:"300px", padding:10}}>
            CHILD<br/>
            <button onClick={this.btnClicked}>PUSH DATA TO PARENT</button>    
        </div>
        );
    }
}