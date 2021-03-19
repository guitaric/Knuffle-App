import React, { useEffect } from 'react';

const LgStraight = ({ data, setData, dice, freezeRow }) =>  {

    useEffect(() => {
        let dataVar = [...data]
        let numbers = []
        if(dice.length) {
            for(let i=0; i<5; i++){
                numbers.push(dice[i].number)
            }
        }

        if((numbers.includes(1) && numbers.includes(2) && numbers.includes(3) && numbers.includes(4)) ||
           (numbers.includes(2) && numbers.includes(3) && numbers.includes(4) && numbers.includes(5)) || 
           (numbers.includes(3) && numbers.includes(4) && numbers.includes(5) && numbers.includes(6))) {
                dataVar[10].value = 40;
           } 
           setData(dataVar)
    }, [dice])


    return (
        <li className='row'>
            <div>Large Straight</div>
            <div>Score 40</div>
            <div id='LgStraight' className={ data[10].checked } onClick={freezeRow}>{ data[10].value }</div>
        </li>
    )
}

export default LgStraight;