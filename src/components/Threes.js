import React, {useState, useEffect} from 'react';

const Threes = ({ data, freezeRow }) =>  {

    const [blockThrees, setBlockThrees] = useState('');

    useEffect(() => {
        if(data[2].checked == 'checked' && data[2].frozen !== 'frozen') {
            setBlockThrees('checked');
        } else if(data[2].frozen == 'frozen') {
            setBlockThrees('frozen');
        } else if(data[0].checked !== 'checked') {
            setBlockThrees('');
        }
    }, [data])

    return (
        <li className='row'>
            <div>Threes</div>
            <div>Count and add only Threes</div>
            <div id='Threes' className={ blockThrees } onClick={freezeRow}> { data[2].value }</div>

        </li>
    )
}

export default Threes;