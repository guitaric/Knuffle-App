import React, {useState, useEffect} from 'react';


const Aces = ({ data, freezeRow }) =>  {

    const [blockAces, setBlockAces] = useState('');

    useEffect(() => {
        if(data[0].checked == 'checked' && data[0].frozen !== 'frozen') {
            setBlockAces('checked');
        } else if(data[0].frozen == 'frozen') {
            setBlockAces('frozen');
        } else if(data[0].checked !== 'checked') {
            setBlockAces('');
        }
    }, [data])


    return (
        <li className='row'>
            <div>Aces</div>
            <div>Count and add only Aces</div>
            <div id='Aces' className={ blockAces } onClick={freezeRow}> { data[0].value }</div>
        </li>
    )
}

export default Aces;