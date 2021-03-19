import React, {useState, useEffect} from 'react';

const Fours = ({ data, freezeRow }) =>  {
    
    const [blockFours, setBlockFours] = useState('');

    useEffect(() => {
        if(data[3].checked == 'checked' && data[3].frozen !== 'frozen') {
            setBlockFours('checked');
        } else if(data[3].frozen == 'frozen') {
            setBlockFours('frozen');
        } else if(data[0].checked !== 'checked') {
            setBlockFours('');
        }
    }, [data])

    return (
        <li className='row'>
            <div>Fours</div>
            <div>Count and add only Fours</div>
            <div id='Fours' className={ blockFours } onClick={freezeRow}> { data[3].value }</div>
        </li>
    )
}

export default Fours;