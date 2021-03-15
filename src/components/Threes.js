import React, { useEffect } from 'react';

const Threes = ({ dices, countThrees, setCountThrees }) =>  {


    useEffect(() => {
        let numbers = dices.map(item => item.number)
        let threes = numbers.reduce((acc, elem) => (elem === 3 ? acc + 3 : acc), 0);
        setCountThrees(threes)
    }, [dices])

    return (
        <li className='row'>
            <div>Threes</div>
            <div>Count and add only Threes</div>
            <div> { countThrees }</div>
        </li>
    )
}

export default Threes;