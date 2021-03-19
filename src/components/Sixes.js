import React, {useState, useEffect} from 'react';

const Sixes = ({ data, freezeRow }) =>  {

    const [blockSixes, setBlockSixes] = useState('');

    useEffect(() => {
        if(data[5].checked == 'checked' && data[5].frozen !== 'frozen') {
            setBlockSixes('checked');
        } else if(data[5].frozen == 'frozen') {
            setBlockSixes('frozen');
        } else if(data[0].checked !== 'checked') {
            setBlockSixes('');
        }
    }, [data])

    return (
        <li className='row'>
            <div>Sixes</div>
            <div>Count and add only Sixes</div>
            <div id='Sixes' className={ blockSixes } onClick={freezeRow}> { data[5].value }</div>
        </li>
    )
}

export default Sixes;