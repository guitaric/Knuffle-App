import React, { useEffect } from 'react';

const Sixes = ({ dices, countSixes, setCountSixes }) =>  {

    useEffect(() => {
        let numbers = dices.map(item => item.number)
        let sixes = numbers.reduce((acc, elem) => (elem === 6 ? acc + 6 : acc), 0);
        setCountSixes(sixes)
    }, [dices])

    return (
        <li className='row'>
            <div>Sixes</div>
            <div>Count and add only Sixes</div>
            <div>{ countSixes }</div>
        </li>
    )
}

export default Sixes;