import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MenuUserComponent from './MenuUserComponent';

export default class MenuComponent extends Component {
    render() {
        return (
            <div>
                <p>MenuComponent</p>
                <Link to="/">back home</Link>
                <hr />
                <BrowserRouter>
                    <div style={{ display: "grid", border: "solid black 3px" }}>
                        <div style={{
                            gridColumn: "1 / 2", gridRow: 1,
                            borderRight: "solid black 2px",
                            alignSelf: "center",
                            justifySelf: "center",
                            padding: 50
                        }}>
                            <Link to="/menu/1">user 1</Link><br />
                            <Link to="/menu/2">user 2</Link><br />
                        </div>
                        <div style={{
                            gridColumn: "2 / 6",
                            gridRow: 1, 
                            alignSelf: "center",
                            justifySelf:"center"
                        }}>
                            <Route path="/menu/:userId" component={MenuUserComponent} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}