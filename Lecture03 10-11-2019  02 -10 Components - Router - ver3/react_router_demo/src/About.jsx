import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                <Link to="/">home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/menu">Menu</Link>

                <p>about</p>
            </div>
        );
    };
}