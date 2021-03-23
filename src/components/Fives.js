import React from 'react';

const Fives = ({ data, freezeRow }) =>  {



    return (
        <li className='row'>
            <div>Fives</div>
            <div>Count and add only Fives</div>
            <div id='Fives' 
                 className={ `${data[4].frozen ? "frozen" : data[4].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>
                      
                 { data[4].value }
            </div>
        </li>
    )
}

export default Fives;