import React, { useEffect } from 'react';

const Bonus = ({ bonus, setBonus, countLeft }) =>  {


    useEffect(() => {
        if(countLeft >= 63) setBonus(35);
    }, [countLeft])

    return (
        <li className='row'>
            <div>Bonus</div>
            <div>Score 35</div>
            <div>{ bonus }</div>
        </li>
    )
}

export default Bonus;