import React, { useState } from 'react';
import { useEffect } from 'react';
import './internship-tracker.css';
import Timer from './internship-timer';

export default function InternshipTracker() {
    const [weeks, setWeeks] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(null);

    const now = new Date();
    const yearEnd = new Date(now.getFullYear() + 1, 0, 0);
    const difference = yearEnd - now;

    const remainingSeconds = Math.floor(difference / 1000) % 60;
    const remainingMinutes = Math.floor(difference / (1000 * 60)) % 60;
    const remainingHours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const remainingWeeks = Math.floor(remainingDays / 7);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval (()=>{
                if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                } else if (minutes > 0) {
                    setMinute((minutes) => minutes - 1);
                    setSeconds(59);
                } else if (hours > 0) {
                    setHours((hours) => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                } else if (days > 0) {
                    setDays((days) => days - 1);
                    setHours((23));
                    setMinutes(59);
                    setSeconds(59);
                } else {
                    setWeeks((weeks) => weeks - 1) 
                    setDays(6);
                    setHours(23);
                    setMinutes(59);
                    setSeconds(59);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [seconds, minutes, hours, days, weeks, isRunning]);

    return (
        <div>
            <h1 className = "tracker"> YOU HAVE NO INTERNSHIPS </h1>

            <Timer 
            weeks={remainingWeeks}
            days={remainingDays}
            hours={remainingHours}
            minutes={remainingMinutes}
            seconds={remainingSeconds}
            />

        </div>
    );
}