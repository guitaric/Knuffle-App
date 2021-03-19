import React from 'react';

const FullHouse = ({data, freezeRow}) =>  {

    return (
        <li className='row'>
            <div>Full House</div>
            <div>Score 25</div>
            <div id='FullHouse' className={ data[8].checked } onClick={freezeRow}> 34</div>
        </li>
    )
}

export default FullHouse;