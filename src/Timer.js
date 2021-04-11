import React from "react"; 
import "./App.css";
import './Timer.css';
import { FiArrowUpCircle } from 'react-icons/fi';
import { FiArrowDownCircle } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';

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
            <h1> Pomodoro Timer </h1>

                <h2> What is a Pomodoro Timer? </h2>
                    The Pomodoro method is used to improve productivity by using 25-minute work segments with 5-minute breaks in between,
                    but you can customize it according to your own preferences. Have trouble staying focused? Try this out!
                    
                <p> <img src={"laptop.png"} alt={"cute graphic"}/> </p>
                <div className="text-center">
                    <div className="dual-container">
                        <Length 
                            title= {<i>break length</i>} 
                            changeTime={changeTime} 
                            type={"break"}
                            time={breakTime}
                            formatTime={formatTime}
                        />
                        <Length 
                            title= {<i>session length</i>} 
                            changeTime={changeTime} 
                            type={"session"}
                            time={sessionTime}
                            formatTime={formatTime}
                        />
                    </div>
                </div>
                &nbsp;
                <h3 className="text-center"><i>{onBreak ? "currently in . . . break!" : "currently in . . . session!"}</i></h3>
                <h1>{formatTime(displayTime)}</h1>
                &nbsp;
                <div className="dual-container">
                    <Button variant="outline-dark"
                        onClick={controlTime}
                        className="button" 
                    >
                        {timerOn ? (
                            <i>pause</i>
                        ) : (
                            <i>play</i>
                        )}
                    </Button>{' '}
                    <Button variant="outline-dark"
                        onClick={resetTime}
                        className="button" 
                    >
                        <i>reset</i>
                    </Button>{' '}
                </div>
        </div>
        
    );
}

    function Length ({title, changeTime, type, time, formatTime}) {
        return (
            <div>
                <h3>{title}</h3>
                <div className="time-sets">
                    <Button variant="dark"
                        onClick={() => changeTime(-60, type)}
                        className="button"
                    >
                        <FiArrowDownCircle size = '10x'/>
                    </Button>{' '}
                    <h3>{formatTime(time)}</h3>
                    <Button variant="dark"
                        onClick={() => changeTime(60, type)}
                        className="button"
                    >
                        <FiArrowUpCircle size = '10x' />
                    </Button>{' '}
                </div>
            </div>
        );
    }

export default Timer;