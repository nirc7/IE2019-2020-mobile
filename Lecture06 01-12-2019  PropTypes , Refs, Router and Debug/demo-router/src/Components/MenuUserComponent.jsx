import React, { Component } from 'react';

class MenuUserComponent extends Component {
    render() {
        return (
            <div>
                MenuUserComponent <br/>
                {this.props.match.params.userId }
                state.uderId = {this.props.location.state.userObj.userId}
                state.userName = {this.props.location.state.userObj.userName}
            </div>
        );
    }
}


export default MenuUserComponent;