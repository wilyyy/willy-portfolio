//Datetime setup
const DateTime = ({date, time}) => {
    let showDate = new Date();
    let displayTodaysDate = showDate.getDate() + '/' + (showDate.getMonth() +1) + '/' + showDate.getFullYear();
    let displayTime = showDate.getHours() + ':' + showDate.getMinutes();
    return (
        <>
            {date &&
                <div>
                    <p>{displayTodaysDate}</p>
                </div>
            }
            
            {time && 
                <div>
                    <p>{displayTime}</p>
                </div>
            }
        </>
    )
}

export default DateTime;
