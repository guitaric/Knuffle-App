import React, { useEffect } from 'react';

const Fives = ({ dices, countFives, setCountFives }) =>  {

    useEffect(() => {
        let numbers = dices.map(item => item.number)
        let fives = numbers.reduce((acc, elem) => (elem === 5 ? acc + 5 : acc), 0);
        setCountFives(fives)
    }, [dices])

    return (
        <li className='row'>
            <div>Fives</div>
            <div>Count and add only Fives</div>
            <div>{ countFives }</div>
        </li>
    )
}

export default Fives;