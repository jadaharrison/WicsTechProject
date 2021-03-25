import React from "react";
import "./App.css";
import Profile from "./Profile";

function ProfileContainer() {
    return (
        <div className = "profileContainer">
          <Profile name = "Leah Levin" school = "CAS '23" 
              major = "Cognitive Science and Computer Science" person = "1"/>
            <Profile name = "Jada Harrison" school = "CAS '23" 
                major = "Cognitive Science and Computer Science" person = "2"/>
            <Profile name = "Nicole Chau" school = "CAS '23" 
                major = "Cognitive Science and Computer Science" person = "3"/>
            <Profile name = "Cindy Chen" school = "CAS '23" 
                major = "Cognitive Science and Computer Science" person = "4"/>
        
            
        </div>

    );
}

export default ProfileContainer;