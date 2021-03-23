import React, {useEffect} from 'react';

const FullHouse = ({data, setData, dice, freezeRow}) =>  {

    useEffect(() => {
        let numbers = dice.map(item => item.number)
        if(numbers.length){
            numbers = numbers.sort()
            let uniqueValues  = [... new Set(numbers)];
            if(uniqueValues.length === 2){
                if(uniqueValues[1] !== uniqueValues[3]) {
                    let dataVar = [...data];
                    dataVar[8].value = 25;
                    setData(dataVar)
                }
            }
        }
    }, [dice])


    return (
        <li className='row'>
            <div>Full House</div>
            <div>Score 25</div>
            <div id='FullHouse' 
                 className={ `${data[8].frozen ? "frozen" : data[8].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>

                 { data[8].value }
            </div>
        </li>
    )
}

export default FullHouse;