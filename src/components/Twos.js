import React, {useState, useEffect} from 'react';

const Twos = ({ data, freezeRow }) =>  {

    const [blockTwos, setBlockTwos] = useState('');

    useEffect(() => {
        if(data[1].checked == 'checked' && data[1].frozen !== 'frozen') {
            setBlockTwos('checked');
        } else if(data[1].frozen == 'frozen') {
            setBlockTwos('frozen');
        } else if(data[0].checked !== 'checked') {
            setBlockTwos('');
        }
    }, [data])

    return (
        <li className='row'>
            <div>Twos</div>
            <div>Count and add only Twos</div>
            <div id='Twos' className={ blockTwos } onClick={freezeRow}> { data[1].value }</div>
        </li>
    )
}

export default Twos;