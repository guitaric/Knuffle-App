import React, {useState} from 'react';


const Interaction = ({
    rollsCount, setRollsCount, 
    // Numbers, 
    // setNewNumbers
    Dice1, setDice1,
    Dice2,  setDice2,
    Dice3, setDice3,
    Dice4, setDice4,
    Dice5, setDice5

}) =>  {

    // const [Dice1check, setDice1check] = useState(false);
    // const [Dice2check, setDice2check] = useState(false);
    // const [Dice3check, setDice3check] = useState(false);
    // const [Dice4check, setDice4check] = useState(false);
    // const [Dice5check, setDice5check] = useState(false);
    const [DiceCheck, setDiceCheck] = useState([]);

function checking(e) {
    if(DiceCheck.length) {
        let classes = e.target.className;
        if(classes.includes('firstdice')) ;
    }
    console.log(DiceCheck)
}


 function roll() {
    if(rollsCount>0){
        setRollsCount( rollsCount -1 )
        setDiceCheck([false, true, false, false, false])

        if(DiceCheck[0] === false) setDice1(Math.floor(Math.random()*6)+1);
        if(DiceCheck[1] === false) setDice2(Math.floor(Math.random()*6)+1);
        if(DiceCheck[2] === false) setDice3(Math.floor(Math.random()*6)+1);
        if(DiceCheck[3] === false) setDice4(Math.floor(Math.random()*6)+1);
        if(DiceCheck[4] === false) setDice5(Math.floor(Math.random()*6)+1);
    }
 }


// function freezeDice(e){
//     let classes = e.target.className;
//     if(classes.includes('firstDice')) {
//         setDice1check(!Dice1check)
//     } else if(classes.includes('secondDice')) {
//         setDice2check(!Dice2check)
//     } else if(classes.includes('thirdDice')) {
//         setDice2check(!Dice3check)
//     } else if(classes.includes('fourthDice')) {
//         setDice2check(!Dice4check)
//     } else if(classes.includes('fifthDice')) {
//         setDice2check(!Dice5check)
//     }
// }

    return (
        <li className='buttonrow'>
            <button onClick={ roll }>Roll the Dice! {rollsCount} Left</button>

            <div className='dices firstDice' onClick={ checking }>{Dice1}</div>
            <div className='dices secondDice' onClick={ checking }>{Dice2}</div>
            <div className='dices thirdDice' onClick={ checking }>{Dice3}</div>
            <div className='dices fourthDice' onClick={ checking }>{Dice4}</div>
            <div className='dices fifthDice' onClick={ checking }>{Dice5}</div> 
            <div>{DiceCheck[3]}</div>      
        </li>
    )
}

export default Interaction;