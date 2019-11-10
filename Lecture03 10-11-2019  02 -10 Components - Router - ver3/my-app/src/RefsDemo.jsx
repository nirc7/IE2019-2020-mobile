import React, { Component } from 'react';

export default class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt1: ''
        }
        this.txtInput1;
        this.txtInput2;
    }

    TextChanged = () => {
        this.setState({
            txt1: this.txtInput1.value,
            txt2: this.txtInput2.value
        });
    }
    // TextChanged2 = (e) => {
    //     this.setState({
    //         txt2: e.target.value
    //     })
    // }

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
                RefsDemo <br />
                <input type="text"
                    ref={(input) => { this.txtInput1 = input }}
                    onChange={this.TextChanged}
                />
                <span style={{ marginRight: 50 }} />
                {this.state.txt1}
                <hr />
                <input type="text"
                    ref={(input) => { this.txtInput2 = input }}
                    onChange={this.TextChanged}
                />
                <span style={{ marginRight: 50 }} />
                {this.state.txt2}
            </div>)
    }
}