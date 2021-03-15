import React, { useState, useEffect } from 'react';

const Knuffle = ({ dices,
                   countOnes, countTwos, 
                   countThrees, countFours, 
                   countFives, countSixes
}) =>  {

const [knuffle, setKnuffle] = useState(0);

useEffect(() => {
    let numbers = dices.map(item => item.number)
    let hit = numbers.every(item => item === numbers[0])
    if(hit) setKnuffle(50)
    else setKnuffle(0)
}, [countOnes, countTwos, countThrees, countFours, countFives, countSixes])


    return (
        <li className='row'>
            <div>Knuffle</div>
            <div>Score 50</div>
            <div>{ knuffle }</div>
        </li>
    )
}

export default Knuffle;