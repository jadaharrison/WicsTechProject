import React from "react";
import "./App.css";
import Leah from "./leahl01.jpeg"
import Cindy from "./cindy.jpg"
import Jada from "./jada.jpg"
import Nicole from "./NicoleChau.jpg"


function Profile(props) {
    const person = props.person;
    if (person === "1") {
    return (
       
        <div className = "profile">
         <img src={Leah} alt={"Leah"}/>
         <br></br>
         <br></br>
            <h3>{props.name}</h3>
            <h3> {props.school}</h3>
            <h3>{props.major}</h3>
            
        </div>

    ); } 

    else if (person === "2") {
        return (
           
            <div className = "profile">
               <img src={Jada} alt={"Jada"}/>
               <br></br>
               <br></br>
                <h3>{props.name}</h3>
                <h3> {props.school}</h3>
                <h3>{props.major}</h3>
                
            </div>
    
        ); } 

    else if (person === "3") {
        return (
               
             <div className = "profile">
              <img src={Nicole} alt={"Nicole"}/>
              <br></br>
              <br></br>
                <h3>{props.name}</h3>
                <h3> {props.school}</h3>
                <h3>{props.major}</h3>
                    
            </div>
        
         ); } 

    else {
         return (
                   
             <div className = "profile">
                 <img src={Cindy} alt={"Cindy"}/>
                 <br></br>
                 <br></br>
                    <h3>{props.name}</h3>
                     <h3> {props.school}</h3>
                      <h3>{props.major}</h3>
                        
                 </div>
            
            ); } 

}

export default Profile;