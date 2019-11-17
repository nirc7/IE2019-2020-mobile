import React from 'react';

export default function FCStudent(props) {

    let num = 7;

    function funcBonus(b) {
        console.log(b);
        num = 8;
    }

    function btn1() {
        num = 10;
        console.log('num=' + num);
    }

    //funcBonus(8)
    return (
        <div>
            num = {num}
            <h3> the student name is :{props.sname}</h3>
            <h3> the student grade is :{props.sgrade}</h3>
            {funcBonus(props.sgrade + 5)}
            {num} <br/>
            <button onClick={btn1}>btn1</button> <br/>
            {num}

        </div>
    );
}

