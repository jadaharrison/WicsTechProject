import React from "react"; 
import "./App.css";

function Timer() {
    return (
        <div className = "timer">
            <h1> POMODORO TIMER ✩⃛( ͒ ु•·̫• ू ͒) </h1>
                <h2> What is a Pomodoro Timer? </h2>
                    The Pomodoro method is used to improve productivity by using
                    30-minute work segments with 5-minute breaks in between. 
                    Have trouble staying focused? Try out this timer!
                <h2> 30:00 </h2>
                <img src={"laptop.png"} alt={"cute graphic"}/>
        </div>
        
    );
}

export default Timer;