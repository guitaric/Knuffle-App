import React, {useEffect} from 'react';

const SmStraight = ({ dices, smallStraight, setSmallStraight }) =>  {

    useEffect(() => {
        let numbers = dices.map(item => item.number)
        if((numbers.includes(1) && numbers.includes(2) && numbers.includes(3) && numbers.includes(4) && numbers.includes(5)) ||
           (numbers.includes(2) && numbers.includes(3) && numbers.includes(4) && numbers.includes(5) && numbers.includes(6))) {
               setSmallStraight(30)
           } 
    }, [dices])

    return (
        <li className='row'>
            <div>Small Straight</div>
            <div>Score 30</div>
            <div>{ smallStraight }</div>
        </li>
    )
}

export default SmStraight;