import React, { useEffect } from 'react';

const Aces = ({ dices, countOnes, setCountOnes }) =>  {


useEffect(() => {
    let numbers = dices.map(item => item.number)
    let ones = numbers.reduce((acc, elem) => (elem === 1 ? acc + 1 : acc), 0);
    setCountOnes(ones)
}, [dices]) 

    return (
        <li className='row'>
            <div>Aces</div>
            <div>Count and add only Aces</div>
            <div> { countOnes }</div>
        </li>
    )
}

export default Aces;