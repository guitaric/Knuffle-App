import React, { useEffect } from 'react';

const Knuffle = ({ dice, data, freezeRow }) =>  {


useEffect(() => {
    let numbers = dice.map(item => item.number)
    if(numbers.length){
        let hit = numbers.every(item => item === numbers[0])
        if(hit){
            let dataVar = [...data];
            dataVar[11].value = 50;
        }
    }

}, [dice])


    return (
        <li className='row'>
            <div>Knuffle</div>
            <div>Score 50</div>
            <div id='Knuffle' 
                 className={ `${data[11].frozen ? "frozen" : data[11].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>

                 { data[11].value }
            </div>
        </li>
    )
}

export default Knuffle;