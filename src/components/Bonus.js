import React, { useEffect} from 'react';

const Bonus = ({ bonus, setBonus, countLeft, playSignal }) =>  {

    useEffect(() => {
        console.log(countLeft)
        if(countLeft >= 63) setBonus(35);
    }, [playSignal])

    return (
        <li className='row'>
            <div>Bonus</div>
            <div>Score 35</div>
            <div>{ bonus }</div>
        </li>
    )
}

export default Bonus;