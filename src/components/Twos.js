import React from 'react';

const Twos = ({ data, freezeRow }) =>  {

    return (
        <li className='row'>
            <div>Twos</div>
            <div>Count and add only Twos</div>
            <div id='Twos' 
                 className={ `${data[1].frozen ? "frozen" : data[1].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>
                      
                 { data[1].value }
            </div>
        </li>
    )
}

export default Twos;