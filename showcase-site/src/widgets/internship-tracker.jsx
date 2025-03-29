import React, { useEffect, useState } from 'react';
import './internship-tracker.css';
import Timer from './internship-timer';

export default function InternshipTracker() {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const yearEnd = new Date(now.getFullYear(), 11, 31, 23, 59, 59); // End of this year
    const diff = yearEnd - now;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    days = days % 7;

    return { weeks, days, hours, minutes, seconds };
    };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="tracker">YOU HAVE NO INTERNSHIPS</h1>
      <Timer 
        weeks={timeLeft.weeks}
        days={timeLeft.days}
        hours={timeLeft.hours}
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}
      />
    </div>
  );
}