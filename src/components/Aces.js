import React from 'react';


const Aces = ({ data, freezeRow }) =>  {

    return (
        <li className='row'>
            <div>Aces</div>
            <div>Count and add only Aces</div>
            <div id='Aces' 
                 className={ `${data[0].frozen ? "frozen" : data[0].checked ? "checked" : ""}` } 
                 onClick={freezeRow}>

                 { data[0].value }
            </div>
        </li>
    )
}

export default Aces;