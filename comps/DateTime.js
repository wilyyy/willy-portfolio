
import { useState, useEffect } from 'react';

const DateTime = ({date, time}) => {
    const [currTime, setCurrTime] = useState();

    useEffect(() => {
        setInterval(() => {
            setCurrTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])

    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const showDate = new Date().toLocaleDateString(undefined, options);
    // let showDate = new Date();
    // let displayTodaysDate = showDate.getDate() + '/' + (showDate.getMonth() +1) + '/' + showDate.getFullYear();
    // let displayTime = showDate.getHours() + ':' + showDate.getMinutes();
    return (
        <>
            {date &&
                <div>
                    <p>{showDate}</p>
                </div>
            }
            
            {time && 
                <div>
                    <p>{currTime}</p>
                </div>
            }
        </>
    )
}

export default DateTime;