import React, {useEffect} from 'react';

const TotalLeft = ({ 
    countLeft, setCountLeft,
    countOnes, countTwos, 
    countThrees, countFours, 
    countFives, countSixes
}) =>  {

    useEffect(() => {
        let sum = countOnes + countTwos + countThrees + 
                  countFours + countFives + countSixes
        setCountLeft(sum)
    }, [countOnes, countTwos, countThrees, countFours, countFives ,countSixes])
    //condition ändern wann gerendert wird


    return (
        <li className='row'>
            <div>Total Left</div>
            <div>-----------------------------------------------></div>
            <div>{ countLeft }</div>
        </li>
    )
}

export default TotalLeft;