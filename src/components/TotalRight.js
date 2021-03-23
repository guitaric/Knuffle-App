import React, {useEffect} from 'react';

const TotalRight = ({data, playSignal, countRight, setCountRight}) =>  {

    let sum = 0
    useEffect(() => {
        let dataVar = [...data]
        for(let i=6; i<13; i++){
            sum += dataVar[i].value
        }
        setCountRight(sum)
    }, [playSignal])

    return (
        <li className='row'>
            <div>Total Right</div>
            <div>----------------------------------></div>
            <div>{ countRight }</div>
        </li>
    )
}

export default TotalRight;