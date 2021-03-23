import React from 'react';

const OverallScore = ({totalScore}) =>  {

    return (
        <li className='row'>
            <div>Overall Score</div>
            <div></div>
            <div id='OverallScore' >
                 { totalScore }
            </div>
        </li>
    )
}

export default OverallScore;