import React, { useEffect} from 'react';

const Chance = ({ data, setData, dice, freezeRow }) =>  {


    useEffect(() => {
        if(data[12].frozen === false) {
            let dataVar = [...data];
            let numbers = dice.map(item => item.number)
            let sum = numbers.reduce((acc, elem) => acc += elem, 0);
            dataVar[12].value = sum;
            setData(dataVar)
        }
    }, [dice]) 

    return (
        <li className='row'>
            <div>Chance</div>
            <div>Total Score of all Dice</div>
            <div id='Chance' 
                 className={ `${data[12].frozen ? "frozen" : data[12].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>

                 { data[12].value }
            </div>
        </li>
    )
}

export default Chance;