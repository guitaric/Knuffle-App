import React, {useEffect} from 'react';

const ThreeOfAKind = ({dice, data, setData, freezeRow}) =>  {

    useEffect(() => {
        let numbers = dice.map(item => item.number)
        if(numbers.length){
            numbers = numbers.sort()
            let uniqueValues  = [...new Set(numbers)];
            if(uniqueValues.length <= 3) {
                if(numbers[0] === numbers[2] || 
                   numbers[1] === numbers[3] || 
                   numbers[2] === numbers[4]) {
                    let dataVar = [...data];
                    let sum = numbers.reduce((acc, elem) => acc += elem, 0);
                    dataVar[6].value = sum;
                    setData(dataVar)
                }
            }
        }
    }, [dice])

    return (
        <li className='row'>
            <div>3 of a kind</div>
            <div>Add Total of all dice</div>
            <div id='ThreeOfAKind' 
                 className={ `${data[6].frozen ? "frozen" : data[6].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>

                 { data[6].value }
            </div>
        </li>
    )
}

export default ThreeOfAKind;