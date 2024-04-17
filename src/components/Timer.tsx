import { useState, useEffect } from "react";

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        if (time > 0) {
            const timerId = setTimeout(() => {
                setTime(time - 1000);
            }, 1000);

            return () => clearTimeout(timerId);
        }
    }, [time]); 

    const getFormattedTime = (millisecond) => {
        let total_seconds = parseInt(Math.floor(millisecond / 1000));
        let total_minutes = parseInt(total_seconds / 60);
        let seconds = total_seconds % 60;
        let minutes = total_minutes % 60;

        return `${minutes < 10 ? '0' + minutes : minutes} M ${seconds < 10 ? '0' + seconds : seconds} S`;
    };

    const textColor = time < 60000 ? 'text-red-500' : 'text-black';

    return (
        <div className={`text-xs  ${textColor}`}>
            {getFormattedTime(time)}
        </div>
    );
}

export default Timer;