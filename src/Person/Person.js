import React from 'react';

const person = (props) =>{
    return (
        <p onClick={props.click}>
            My name is {props.name}  and age is {props.age}.
            {props.children}
            <br/>
            <input type='text' onChange={props.changed}/>

        </p>
    );
}


export default person;