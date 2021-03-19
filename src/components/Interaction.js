import React from 'react';


const Interaction = ({
    numberRolls, setNumberRolls, 
    dice, setDice,
    play

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

        if(e.target.style.backgroundColor === 'black'){
            e.target.style.backgroundColor = '';
            let temp = [...dice]
            temp[divIndex].selected = false;
            setDice(temp);

        } else {
            e.target.style.backgroundColor = 'black';
            let temp = [...dice]
            temp[divIndex].selected = true;
            setDice(temp);
        }
    }




    let diceVar;
    if(numberRolls < 3) {
        diceVar = 
        <div className='diceDivs'>
            <div id='firstDice' onClick={ freezeDice }>{dice[0].number}</div>
            <div id='secondDice' onClick={ freezeDice }>{dice[1].number}</div>
            <div id='thirdDice' onClick={ freezeDice }>{dice[2].number}</div>
            <div id='fourthDice' onClick={ freezeDice }>{dice[3].number}</div>
            <div id='fifthDice' onClick={ freezeDice }>{dice[4].number}</div>
        </div>
    }



    return (
        <li className='buttonrow'>
            <button onClick={ rollDice }>{numberRolls} left</button>
            <button onClick={ play }> Play </button>
            <br/>
            <div>{diceVar}</div>
        </li>
    )
}

export default Interaction;