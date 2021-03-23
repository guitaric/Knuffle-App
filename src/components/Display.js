import React, { useEffect } from 'react';

const Display = ({ message, setMessage, data, totalScore }) =>  {


    useEffect(() => {

        if(data.some((item => item.checked === true && item.frozen === false))) {
            setMessage("Press the left button to roll the dice/Click on the dice to keep them for the next roll/Press the Play button after selecting a number")
        } else if(data.every(item => item.frozen === true)) {
            setMessage("Your final score is: ")
        }
    }, [data])


    return(
        <li className='row'>
            <div>{ message } {`${data.every(item => item.frozen) ? totalScore : "" }`} </div>
        </li>
    )
}

export default Display;