import React, { useEffect } from 'react';

const Twos = ({ dices, countTwos, setCountTwos }) =>  {

    useEffect(() => {
        let numbers = dices.map(item => item.number)
        let twos = numbers.reduce((acc, elem) => (elem === 2 ? acc + 2 : acc), 0);
        setCountTwos(twos)
    }, [dices])

    return (
        <li className='row'>
            <div>Twos</div>
            <div>Count and add only Twos</div>
            <div>{ countTwos }</div>
        </li>
    )
}

export default Twos;