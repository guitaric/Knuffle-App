import React from 'react';


const Interaction = ({
    numberRolls, setNumberRolls, 
    dice, setDice,
    play, setMessage,
    data

}) =>  {

    const rollDice =  () => {
        if(numberRolls === 3) {
            setNumberRolls(numberRolls - 1);

            const result = [];
            for(let i = 0; i < 5; i++) {
              result.push({
                id: i, 
                number: Math.floor(Math.random()*6)+1, 
                selected: false
              });
            }              
            setDice(result);
        }
        else if(numberRolls > 0) {
            setNumberRolls(numberRolls - 1);
            let temp = [...dice]
            temp.filter(item => item.selected === false)
                .forEach(item => item.number = Math.floor(Math.random()*6)+1)
           
            setDice(temp);
            setMessage("Click on the dice to keep them")

        } else if (numberRolls === 0) {
            setMessage("Log in one row to transfer the points")
        }
    }

    const freezeDice = (e) => {
        let divIndex;
        switch (e.target.id) {
            case 'firstDice': divIndex = 0; break;
            case 'secondDice' : divIndex = 1; break; 
            case 'thirdDice' : divIndex = 2; break; 
            case 'fourthDice' : divIndex = 3; break; 
            case 'fifthDice' : divIndex = 4; break; 
            default: divIndex = -1; 
        }

        if(e.target.nodeName === "DIV") {
            if(e.target.classList.contains('selected')){
                e.target.classList.remove('selected');
                let temp = [...dice]
                temp[divIndex].selected = false;
                setDice(temp);
    
            } else {
                e.target.classList.add('selected');
                let temp = [...dice]
                temp[divIndex].selected = true;
                setDice(temp);
            }
        }

        // if(e.target.style.backgroundColor === 'black'){
        //     e.target.style.backgroundColor = '';
        //     let temp = [...dice]
        //     temp[divIndex].selected = false;
        //     setDice(temp);

        // } else {
        //     e.target.style.backgroundColor = 'black';
        //     let temp = [...dice]
        //     temp[divIndex].selected = true;
        //     setDice(temp);
        // }

        
    }

    let diceVar;
    if(numberRolls < 3) {
        diceVar = 
        <div className='diceDivs'>
            <div id='firstDice' onClick={ freezeDice }><span>{dice[0].number}</span></div>
            <div id='secondDice' onClick={ freezeDice }><span>{dice[1].number}</span></div>
            <div id='thirdDice' onClick={ freezeDice }><span>{dice[2].number}</span></div>
            <div id='fourthDice' onClick={ freezeDice }><span>{dice[3].number}</span></div>
            <div id='fifthDice' onClick={ freezeDice }><span>{dice[4].number}</span></div>
        </div>
    }


    return (
        <li className='buttonrow'>
            <button onClick={ rollDice }>{numberRolls} rolls left</button>
            <button className=
                    { `${data.some(item => item.frozen === false && item.checked === true) 
                                   ? '' : 'grey' }` } 
                    onClick={ play }> Play </button>
            <br/>
            <div>{diceVar}</div>
        </li>
    )
}

export default Interaction;