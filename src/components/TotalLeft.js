import React, {useEffect} from 'react';

const TotalLeft = ({ data, playSignal, countLeft, setCountLeft }) =>  {

    let sum = 0
    useEffect(() => {
        let dataVar = [...data]
        for(let i=0; i<6; i++){
            sum += dataVar[i].value
        }
        setCountLeft(sum)
    }, [playSignal])


    return (
        <li className='row'>
            <div>Total Left</div>
            <div>----------------------------------></div>
            <div>{ countLeft }</div>
        </li>
    )
}

export default TotalLeft;