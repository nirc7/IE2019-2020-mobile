import React, { Component } from 'react';

export default class FormDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "insert your name",
            tvSeries:"dexter"
        };
    }

    slctTvChange = (event)=>{
        this.setState({tvSeries: event.target.value});
    }

    ontxtAreaChenged = (event) => {
        this.setState({ txtArea: event.target.value });
    }

    onTextChanged = (event) => {
        //this.setState({userName: event.target.value});
        this.setState({ userName: event.target.value.toUpperCase() });
    }

    btnHelloUser = () => {
        alert('hello ' + this.state.userName);
        alert('hello ' + this.stam);//undefined
        alert('txtarea contains: ' + this.state.txtArea);
        alert('tv series: ' + this.state.tvSeries);
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
                <form >
                    not connected to state input <input
                        type="text"
                        name="stam"
                    /><br />
                    connected to state input WO onchange <input
                        type="text"
                        name="userName"
                        value={this.state.userName}
                    /><br />
                    connected to state input With onchange  <input
                        type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.onTextChanged}
                    /><br />
                    <textarea name="txtArea" id=""
                        cols="20" rows="5"
                        placeholder="insert the story"
                        onChange={this.ontxtAreaChenged}
                        value={this.state.txtArea}></textarea><br />
                    <label>
                        Select tv series:
                        <select value={this.state.tvSeries} 
                        onChange={this.slctTvChange}>
                            <option value="sons of anarchy">Sons of anarchy</option>
                            <option value="californication">Californication</option>
                            <option value="dexter">Dexter</option>
                            <option value="big bang theory">Big bang theory</option>
                        </select>
                    </label><br />
                    <input type="button"
                        value="hello user"
                        onClick={this.btnHelloUser}
                        className="btn btn-defalut" />
                </form>
            </div>
        );

    }

}