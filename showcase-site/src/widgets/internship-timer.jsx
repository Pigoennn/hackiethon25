import React from 'react';
/* import { BsStopWatch } from 'react-icons/bs'; */
import styled from "styled-components";

const TimerWrapper = styled.div`
    margin-top: 30vh;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background-color: #222;
    color: #eee;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.4);
    padding: 1rem 0;

    .stop-watch {
        font-size: 6rem;
        margin-right: 1rem;
    }
    label {
        margin-bottom: 0.5rem;
    }
    input {
        width: 160px;
        margin-right: 1rem;
        color: #ffffff;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 4.5rem;
        font-weight: 600; 
        text-align: center;
        padding: 0rem 0.5rem;
        border-radius: 5px;
        pointer-events: none;
    }
    input: hover {
        background-color: #928f8f;
    }
    .time-container {
        display: flex;
        gap: 1.5rem;
        flex-wrap: no-wrap;
        justify-content: center;
        overflow-x: auto;
    }
    .time-block {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}


`;

export default function Timer({weeks, days, hours, minutes, seconds}) {
    return (
        <TimerWrapper>
            {/* <BsStopWatch className = "stop-watch " /> */}
            <div className="time-container">
                <div className="time-block">
                    <label>Weeks</label>
                    <input value={weeks} readOnly/>
                </div>
                <div className="time-block">
                    <label>Days</label>
                    <input value = {days} readOnly/>
                </div>
                <div className="time-block">
                    <label>Hours</label>
                    <input value={hours} readOnly/>
                </div>
                <div className="time-block">
                    <label>Minutes</label>
                    <input value={minutes} readOnly/>
                </div>
                <div className="time-block">
                    <label>Seconds</label>
                    <input value={seconds} readOnly/>
                </div>
            </div>
        </TimerWrapper>
    )
}