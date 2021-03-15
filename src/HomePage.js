import React from "react"; 
import { useState } from 'react';
import "./App.css";

function HomePage() {
    return (

        <div className = "homepage">
            <center>
                <h1>
                    Hello, *Trying to Get Name*{}
                </h1>
            </center>
            <GetName/>
            <ToDoList/> 
        </div>
    )
}

function ToDoList(props) {
    return ( 
    <div className = "todo">
        <h1> TO-DO LIST</h1>
        want to make list of input stuff here. 
        <span>{props.activity}</span>
    </div>
    ); 
}

function GetName() {
    const [name, setName] = useState(" ");
    const handleInput = event => {
        setName(event.target.value);
      };
    

      return (
        <>
        <div>
          {/*<input onChange={handleInput} placeholder="Enter name"/>
          <button onClick={logValue}>Log value</button> */}
          What's your name? {name}
        </div>
        <input name={name} handleInput={handleInput} />
        </>
      );
}

export default HomePage;
