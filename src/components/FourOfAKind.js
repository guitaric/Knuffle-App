import React, {useEffect} from 'react';

const FourOfAKind = ({dice, data, setData, freezeRow}) =>  {

    useEffect(() => {
        let numbers = dice.map(item => item.number)
        if(numbers.length){
            numbers = numbers.sort()
            let uniqueValues  = [... new Set(numbers)];
            if(uniqueValues.length <= 2) {
                if(uniqueValues[0] !== uniqueValues[uniqueValues.length-1]) {
                    let dataVar = [...data];
                    let sum = numbers.reduce((acc, elem) => acc += elem, 0);
                    dataVar[7].value = sum;
                    setData(dataVar)
                }
            }
        }
    }, [dice])

    return (
        <li className='row'>
            <div>4 of a kind</div>
            <div>Add Total of all dice</div>
            <div id='FourOfAKind' 
                 className={ `${data[7].frozen ? "frozen" : data[7].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>

                 { data[7].value }
            </div>
        </li>
    )
}

export default FourOfAKind;