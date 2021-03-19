import React, {useEffect} from 'react';

const SmStraight = ({ dice, data, setData, freezeRow }) =>  {

    // useEffect(() => {
    //     let dataVar = [...data]
    //     let numbers = []
    //     if(dice.length) {
    //         for(let i=0; i<5; i++){
    //             numbers.push(dice[i].number)
    //         }
    //     }

    //     if((numbers.includes(1) && numbers.includes(2) && numbers.includes(3) && numbers.includes(4)) ||
    //        (numbers.includes(2) && numbers.includes(3) && numbers.includes(4) && numbers.includes(5)) || 
    //        (numbers.includes(3) && numbers.includes(4) && numbers.includes(5) && numbers.includes(6))) {
    //             dataVar[10].value = 30;
    //        } 
    //        setData(dataVar)
    // }, [dice])

    return (
        <li className='row'>
            <div>Small Straight</div>
            <div>Score 30</div>
            <div id='SmStraight' className={ data[9].checked } onClick={freezeRow}>{ data[9].value }</div>
        </li>
    )
}

export default SmStraight;