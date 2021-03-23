import React from 'react';

const Threes = ({ data, freezeRow }) =>  {



    return (
        <li className='row'>
            <div>Threes</div>
            <div>Count and add only Threes</div>
            <div id='Threes' 
                 className={ `${data[2].frozen ? "frozen" : data[2].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>
                      
                 { data[2].value }
            </div>
        </li>
    )
}

export default Threes;