import React, { Component } from 'react';

export default class WORefsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt1: '',
            txt2:''
        }        
    }

    TextChanged1 = (e) => {
        this.setState({
            txt1: e.target.value
        })
    }
    TextChanged2 = (e) => {
        this.setState({
            txt2: e.target.value
        })
    }

    render() {
        return (
            <div
                className="container"
                style={{
                    border: "black 2px solid",
                    padding: 10,
                    fontSize: 20,
                    marginTop: 50
                }}>
                WORefsDemo <br />
                <input type="text"
                    onChange={this.TextChanged1}/>
                <span style={{ marginRight: 50 }} />
                {this.state.txt1}
                <hr />
                <input type="text"
                    onChange={this.TextChanged2}/>
                <span style={{ marginRight: 50 }} />
                {this.state.txt2}
            </div>)
    }
}