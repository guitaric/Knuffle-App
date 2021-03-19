import React, {useState, useEffect} from 'react';

const Chance = ({ data, dice, freezeRow }) =>  {

    const [chanceSum, setChanceSum] = useState(0);

    useEffect(() => {
        let numbers = dice.map(item => item.number)
        let sum = numbers.reduce((acc, elem) => acc += elem, 0);
        setChanceSum(sum)
    }) 

    return (
        <li className='row'>
            <div>Chance</div>
            <div>Total Score of all Dice</div>
            <div id='Chance' className={ data[12].checked } onClick={freezeRow}>{chanceSum}</div>
        </li>
    )
}

export default Chance;