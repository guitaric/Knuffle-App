import React, { useEffect } from 'react';

const Fours = ({ dices, countFours, setCountFours }) =>  {

    useEffect(() => {
        let numbers = dices.map(item => item.number)
        let fours = numbers.reduce((acc, elem) => (elem === 4 ? acc + 4 : acc), 0);
        setCountFours(fours)
    }, [dices])

    
    return (
        <li className='row'>
            <div>Fours</div>
            <div>Count and add only Fours</div>
            <div>{ countFours }</div>
        </li>
    )
}

export default Fours;