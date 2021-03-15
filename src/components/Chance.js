import React, {useState, useEffect} from 'react';

const Chance = ({ dices }) =>  {

    const [chanceSum, setChanceSum] = useState(0);

    useEffect(() => {
        let numbers = dices.map(item => item.number)
        let sum = numbers.reduce((acc, elem) => acc += elem, 0);
        setChanceSum(sum)
    }) 

    return (
        <li className='row'>
            <div>Chance</div>
            <div>Total Score of all Dices</div>
            <div>{chanceSum}</div>
        </li>
    )
}

export default Chance;