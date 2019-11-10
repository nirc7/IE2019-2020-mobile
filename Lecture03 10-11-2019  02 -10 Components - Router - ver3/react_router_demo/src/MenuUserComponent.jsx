import React, { Component } from 'react';


export default class MenuUserComponent extends Component {
    render() {
        return (
            <div>
                <h3>in MenuUserComponent with <br/> 
                user id: {this.props.match.params.userId}</h3>
            </div>
        );
    };
}