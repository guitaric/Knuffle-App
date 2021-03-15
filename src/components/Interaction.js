import React from 'react';


const Interaction = ({
    numberRolls, setNumberRolls, 
    dices, setDices

}) =>  {

    const rollDices =  () => {
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
            setDices(result);
        }
        else if(numberRolls > 0) {
            setNumberRolls(numberRolls - 1);
            let temp = [...dices]
            temp.filter(item => item.selected === false)
                .forEach(item => item.number = Math.floor(Math.random()*6)+1)
           
            setDices(temp);
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
            let temp = [...dices]
            temp[divIndex].selected = false;
            setDices(temp);

        } else {
            e.target.style.backgroundColor = 'black';
            let temp = [...dices]
            temp[divIndex].selected = true;
            setDices(temp);
        }
    }


    let diceVar;
    if(numberRolls < 3) {
        diceVar = 
        <div className='diceDivs'>
            <div id='firstDice' onClick={ freezeDice }>{dices[0].number}</div>
            <div id='secondDice' onClick={ freezeDice }>{dices[1].number}</div>
            <div id='thirdDice' onClick={ freezeDice }>{dices[2].number}</div>
            <div id='fourthDice' onClick={ freezeDice }>{dices[3].number}</div>
            <div id='fifthDice' onClick={ freezeDice }>{dices[4].number}</div>
        </div>
    }



    return (
        <li className='buttonrow'>
            <button onClick={ rollDices }>{numberRolls} left</button>
            <div>{diceVar}</div>
        </li>
    )
}

export default Interaction;