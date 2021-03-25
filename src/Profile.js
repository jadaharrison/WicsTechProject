import React from "react";
import "./App.css";


function Profile(props) {
    const person = props.person;
    if (person === "1") {
    return (
       
        <div className = "profile">
         <img src={"leahl01.png"} alt={"Leah"}/>
            <h3>{props.name}</h3>
            <h3> {props.school}</h3>
            <h3>{props.major}</h3>
            
        </div>

    ); } 

    else if (person === "2") {
        return (
           
            <div className = "profile">
              <h1> b </h1>
                <h3>{props.name}</h3>
                <h3> {props.school}</h3>
                <h3>{props.major}</h3>
                
            </div>
    
        ); } 

    else if (person === "3") {
        return (
               
             <div className = "profile">
              <h1> c </h1>
                <h3>{props.name}</h3>
                <h3> {props.school}</h3>
                <h3>{props.major}</h3>
                    
            </div>
        
         ); } 

    else {
         return (
                   
             <div className = "profile">
                <h1> d </h1>  
                    <h3>{props.name}</h3>
                     <h3> {props.school}</h3>
                      <h3>{props.major}</h3>
                        
                 </div>
            
            ); } 

}

export default Profile;