import React from "react"; 
import "./App.css";
import ProfileContainer from "./ProfileContainer";

function About() {
    return (
        <div className = "about">
            <h1>About The Website</h1>
            <h3>This site was developed by a group of four women 
                studying computer science at the University of 
                Pennsylvania. Through this site, we hope to help you
                organize your work, time manage, and meet your productivity goals.
            </h3>
            <br></br>
            <ProfileContainer/>

        </div>
    );
}

export default About;