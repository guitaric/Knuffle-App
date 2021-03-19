import React, {useState, useEffect} from 'react';

const Fives = ({ data, freezeRow }) =>  {

    const [blockFives, setBlockFives] = useState('');

    useEffect(() => {
        if(data[4].checked == 'checked' && data[4].frozen !== 'frozen') {
            setBlockFives('checked');
        } else if(data[4].frozen == 'frozen') {
            setBlockFives('frozen');
        } else if(data[0].checked !== 'checked') {
            setBlockFives('');
        }
    }, [data])

    return (
        <li className='row'>
            <div>Fives</div>
            <div>Count and add only Fives</div>
            <div id='Fives' className={ blockFives } onClick={freezeRow}> { data[4].value }</div>
        </li>
    )
}

export default Fives;