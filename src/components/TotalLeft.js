import React from 'react';

const TotalLeft = ({ countLeft }) =>  {

    return (
        <li className='row'>
            <div>Total Left</div>
            <div>----------------------------------></div>
            <div>{ countLeft }</div>
        </li>
    )
}

export default TotalLeft;