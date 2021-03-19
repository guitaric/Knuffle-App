import React from 'react';

const ThreeOfAKind = ({data, freezeRow}) =>  {

    return (
        <li className='row'>
            <div>3 of a kind</div>
            <div>Add Total of all dice</div>
            <div id='ThreeOfAKind' className={ data[6].checked } onClick={freezeRow}>34 </div>
        </li>
    )
}

export default ThreeOfAKind;