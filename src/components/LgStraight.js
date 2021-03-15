import React, { useEffect } from 'react';

const LgStraight = ({ dices, largeStraight, setLargeStraight }) =>  {

    useEffect(() => {
        let numbers = dices.map(item => item.number)
        if((numbers.includes(1) && numbers.includes(2) && numbers.includes(3) && numbers.includes(4)) ||
           (numbers.includes(2) && numbers.includes(3) && numbers.includes(4) && numbers.includes(5)) || 
           (numbers.includes(3) && numbers.includes(4) && numbers.includes(5) && numbers.includes(6))) {
               setLargeStraight(40)
           } 
    }, [dices])


    return (
        <li className='row'>
            <div>Large Straight</div>
            <div>Score 40</div>
            <div>{ largeStraight }</div>
        </li>
    )
}

export default LgStraight;