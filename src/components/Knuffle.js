import React, { useState, useEffect } from 'react';

const Knuffle = ({ dice, data, freezeRow,
                   knuffle, setKnuffle
}) =>  {


useEffect(() => {
    let numbers = dice.map(item => item.number)
    if(numbers.length){
        let hit = numbers.every(item => item === numbers[0])
        if(hit) setKnuffle(50)
    }
    else setKnuffle(0)
}, [])


    return (
        <li className='row'>
            <div>Knuffle</div>
            <div>Score 50</div>
            <div id='Knuffle' className={ data[11].checked } onClick={freezeRow}>{ knuffle }</div>
        </li>
    )
}

export default Knuffle;