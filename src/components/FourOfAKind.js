import React from 'react';

const FourOfAKind = ({data, freezeRow}) =>  {

    return (
        <li className='row'>
            <div>4 of a kind</div>
            <div>Add Total of all dice</div>
            <div id='FourOfAKind' className={ data[7].checked } onClick={freezeRow}>34</div>
        </li>
    )
}

export default FourOfAKind;