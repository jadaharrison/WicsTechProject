import React from "react"; 
import "./App.css";
import './Timer.css'


function Timer() {
    const [displayTime, setDisplayTime] = React.useState(25 * 60);
    const [breakTime, setBreakTime] = React.useState(5 * 60);
    const [sessionTime, setSessionTime] = React.useState(25 * 60);
    const [timerOn, setTimerOn] = React.useState(false);
    const [onBreak, setOnBreak] = React.useState(false);
    const useEffect = React.useEffect;

    const formatTime = (time) => {
        let minutes = Math.floor(time/60);
        let seconds = time % 60
        return (
            (minutes < 10 ? "0" + minutes : minutes) +
            ":" +
            (seconds < 10 ? "0" + seconds : seconds)
        );
    };

    const changeTime = (amount, type) => {
        if (type === "break") {
            if (breakTime <= 60 && amount < 0) {
                return;
            }
            setBreakTime((prev) => prev + amount);
        }
        else {
            if (sessionTime <= 60 && amount < 0) {
                return;
            }
            setSessionTime((prev) => prev + amount);
            if (!timerOn) {
                setDisplayTime(sessionTime + amount);
            }
        }
    }

    useEffect(() => {
        if (displayTime <= 0) {
          setOnBreak(true);
        } else if (!timerOn && displayTime === breakTime) {
          setOnBreak(false);
        }
        console.log("test");
      }, [displayTime, onBreak, timerOn, breakTime, sessionTime]);

    const controlTime = () => {
            let second = 1000;
            let date = new Date().getTime();
            let nextDate = new Date().getTime() + second;
            let onBreakVariable = onBreak;
        if (!timerOn) {
            let interval = setInterval(() => {
                date = new Date().getTime();
                if (date > nextDate) {
                    setDisplayTime(prev => {
                        if (prev <= 0 && !onBreakVariable) {
                            onBreakVariable = true;
                            setOnBreak(true);
                            return breakTime;
                        }
                        else if (prev <= 0 && onBreakVariable) {
                            onBreakVariable = false;
                            setOnBreak(false);
                            return sessionTime;
                        }
                        return prev - 1;
                    })
                    nextDate += second;
                }
            }, 30)
            localStorage.clear();
            localStorage.setItem("interval-id", interval)
        }
    if (timerOn) {
        clearInterval(localStorage.getItem("interval-id"));
    }
    setTimerOn(!timerOn);
    }

    const resetTime = () => {
        setDisplayTime(25 * 60);
        setBreakTime(5 * 60);
        setSessionTime(25 * 60);
    }

    return (
        <div className = "timer">
            <h1> POMODORO TIMER ✩⃛( ͒ ु•·̫• ू ͒) </h1>
                <h2> What is a Pomodoro Timer? </h2>
                    The Pomodoro method is used to improve productivity by using
                    30-minute work segments with 5-minute breaks in between. 
                    Have trouble staying focused? Try this out!
                <img src={"laptop.png"} alt={"cute graphic"}/>
                <div className="center-align">
                    <div className="dual-container">
                        <Length 
                            title= {<p>break length</p>} 
                            changeTime={changeTime} 
                            type={"break"}
                            time={breakTime}
                            formatTime={formatTime}
                        />
                        <Length 
                            title= {<p>session time</p>} 
                            changeTime={changeTime} 
                            type={"session"}
                            time={sessionTime}
                            formatTime={formatTime}
                        />
                    </div>
                </div>
                <h3><p>{onBreak ? "currently in . . . break!" : "currently in . . . session!"}</p></h3>
                <h1>{formatTime(displayTime)}</h1>
                <div className="dual-container">
                    <button 
                        onClick={controlTime}
                        className="btn-small deep-purple lighten-2" 
                    >
                        {timerOn ? (
                            <i className="material-icons">pause</i>
                        ) : (
                            <i className="material-icons">play</i>
                        )}
                    </button>
                    <button 
                        onClick={resetTime}
                        className="btn-small deep-purple lighten-2" 
                    >
                        <i className="material-icons">reset</i>
                    </button>
                </div>
        </div>
        
    );
}

    function Length ({title, changeTime, type, time, formatTime}) {
        return (
            <div>
                <h3>{title}</h3>
                <div className="time-sets">
                    <button 
                        onClick={() => changeTime(-60, type)}
                        className="btn-small deep-purple lighten-2"
                    >
                        <i className="material-icons">decrease</i>
                    </button>
                    <h3>{formatTime(time)}</h3>
                    <button 
                        onClick={() => changeTime(60, type)}
                        className="btn-small deep-purple lighten-2"
                    >
                        <i className="material-icons">increase</i>
                    </button>
                </div>
            </div>
        );
    }

export default Timer;