import React, {useState} from 'react';


const Interaction2 = ({
    rollsCount, setRollsCount, 
    Dices

}) =>  {

    // const [Dice1check, setDice1check] = useState(false);
    // const [Dice2check, setDice2check] = useState(false);
    // const [Dice3check, setDice3check] = useState(false);
    // const [Dice4check, setDice4check] = useState(false);
    // const [Dice5check, setDice5check] = useState(false);
    // const [Dices, setDices] = useState([



// function checking(e) {
//     if(DiceCheck.length) {
//         let classes = e.target.className;
//         if(classes.includes('firstdice')) ;
//     }
//     console.log(DiceCheck)
// }


 function roll() {
    if(rollsCount>0){
        setRollsCount( rollsCount -1 )
        setDices(
            Dices.map(item => item.number = Math.floor(Math.random()*6)+1 )
        )

    }
 }



    return (
        <li className='buttonrow'>
            <button onClick={ roll }>Roll the Dice! {rollsCount} Left</button>

            <div className='dices firstDice' >{Dices[0].id}</div>
            <div className='dices secondDice' >{Dices[1]}</div>
            <div className='dices thirdDice' >{Dices[2]}</div>
            <div className='dices fourthDice' >{Dices[3]}</div>
            <div className='dices fifthDice' >{Dices[4]}</div> 
            {/* <div>{DiceCheck[3]}</div>       */}
        </li>
    )
}

export default Interaction2;