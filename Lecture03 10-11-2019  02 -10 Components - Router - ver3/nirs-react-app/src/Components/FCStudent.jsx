import React from 'react';

export default function FCStudent(props) {

    let lblStam;
    if (props.pname === 'avi') {
        console.log('avi');
        lblStam = 'avi!';
        //props.pname = 'mashu acher' //ERROR!
    }
    else {
        console.log('not avi');
        lblStam = 'stam';
    }


    return (
        <div>
            <div>student name {props.pname}</div>
            <h2>{lblStam}</h2>
        </div>
    );
}