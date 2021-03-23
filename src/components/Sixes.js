import React from 'react';

const Sixes = ({ data, freezeRow }) =>  {

    return (
        <li className='row'>
            <div>Sixes</div>
            <div>Count and add only Sixes</div>
            <div id='Sixes' 
                 className={ `${data[5].frozen ? "frozen" : data[5].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>
                      
                 { data[5].value }
            </div>
        </li>
    )
}

export default Sixes;