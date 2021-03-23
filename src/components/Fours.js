import React from 'react';

const Fours = ({ data, freezeRow }) =>  {
    

    return (
        <li className='row'>
            <div>Fours</div>
            <div>Count and add only Fours</div>
            <div id='Fours' 
                 className={ `${data[3].frozen ? "frozen" : data[3].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>
                      
                 { data[3].value }
            </div>
        </li>
    )
}

export default Fours;