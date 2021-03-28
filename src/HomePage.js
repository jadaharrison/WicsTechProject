import React from "react"; 
import { useState } from 'react';
import "./App.css";

function HomePage() {
    return (

        <div className = "homepage">
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

export default HomePage;
