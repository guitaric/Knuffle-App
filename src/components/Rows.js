import React, {useEffect, useState} from 'react';
import Aces from './Aces';
import Twos from './Twos';
import Threes from './Threes';
import Fours from './Fours';
import Fives from './Fives';
import Sixes from './Sixes';
import Bonus from './Bonus';

import ThreeOfAKind from './ThreeOfAKind';
import FourOfAKind from './FourOfAKind';
import FullHouse from './FullHouse';
import SmStraight from './SmStraight';
import LgStraight from './LgStraight';
import Knuffle from './Knuffle';
import Chance from './Chance';
import TotalLeft from './TotalLeft';
import TotalRight from './TotalRight';
import OverallScore from './OverallScore';
import Interaction from './Interaction';



const Rows = () => {

    const [numberRolls, setNumberRolls] = useState(3);
    const [dice, setDice] = useState([]);
    const [playSignal, setPlaySignal] = useState(0);

    const [countLeft, setCountLeft] = useState(0);
    const [bonus, setBonus] = useState(0);

    const [knuffle, setKnuffle] = useState(0);

    const [data, setData] = useState(
        [
            {
                name: "ones",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "twos",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "threes",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "fours",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "fives",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "sixes",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "threeofakind",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "fourofakind",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "fullhouse",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "smallstraight",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "largestraight",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "knuffle",
                value: 0,
                checked: '',
                frozen: ''
            },
            {
                name: "chance",
                value: 0,
                checked: '',
                frozen: ''
            }
        ])

    const rowKeys= 
    {
        Aces: 0,
        Twos: 1, 
        Threes: 2, 
        Fours: 3, 
        Fives: 4, 
        Sixes: 5, 
        ThreeOfAKind: 6, 
        FourOfAKind: 7, 
        FullHouse: 8, 
        SmStraight: 9,
        LgStraight: 10, 
        Knuffle: 11, 
        Chance: 12
    }


    //change value from dice to row
    useEffect(() => {
        let dataVar = [...data]
        for(let i=0; i < 6; i++) {
            if(data[i].frozen == false){
                let numbers = dice.map(item => item.number)
                let num = numbers.reduce((acc, elem) => (elem === i+1 ? acc + i+1 : acc), 0);
                dataVar[i].value = num;
                setData(dataVar)
            }
        }

    }, [dice])

    //freeze row, if play button is clicked
    useEffect(() => {
        let dataVar = [...data]
        for(let i=0; i<13; i++) {
            if(dataVar[i].checked == true) dataVar[i].frozen = true;
            setData(dataVar)
        }
    }, [playSignal])


    //set check to true if it is clicked on 
    const freezeRow = (e) => {
        let theRowId = rowKeys[e.target.id];
        let dataVar = [...data]

        if(dataVar[theRowId].frozen == false){
            if(dataVar[theRowId].checked === 'checked') {
                dataVar[theRowId].checked = '';
            } else {
                dataVar.filter(item => item.frozen == false && item.checked == 'checked')
                       .forEach(item => item.checked = '');
                dataVar[theRowId].checked = 'checked';
            }
            setData(dataVar)
        }
    }


    const play = () => {
        setPlaySignal(playSignal+1)
        setNumberRolls(3);
        let dataVar = [...data]
        dataVar.filter(item => item.checked == '')
               .forEach(item => item.value = 0)
        dataVar.filter(item => item.checked == 'checked')
               .forEach(item => item.frozen = 'frozen')
        setData(dataVar)
    }

    return(
        <div className='rowsContainer'>
            <ul className='leftContainer'>
                <Aces data={data} freezeRow={freezeRow} />
                <Twos data={data} freezeRow={freezeRow}  />
                <Threes data={data} freezeRow={freezeRow} />
                <Fours data={data} freezeRow={freezeRow} />
                <Fives data={data} freezeRow={freezeRow} />
                <Sixes data={data} freezeRow={freezeRow} />
                <Bonus 
                    bonus={bonus} 
                    playSignal={playSignal} 
                    setBonus={setBonus} 
                    countLeft={countLeft} />
                <TotalLeft 
                    data={data} 
                    playSignal={playSignal}
                    countLeft={countLeft} 
                    setCountLeft={setCountLeft}             
                />
                <Interaction 
                    numberRolls={numberRolls} 
                    setNumberRolls={setNumberRolls}
                    dice={dice}
                    setDice={setDice}
                    play={play}
                />

            </ul>


            <ul className='rightContainer'>
                <ThreeOfAKind data={data} freezeRow={freezeRow}/>
                <FourOfAKind data={data} freezeRow={freezeRow}/>
                <FullHouse data={data} freezeRow={freezeRow}/>
                <SmStraight data={data} setData={setData} dice={dice} freezeRow={freezeRow}/>
                <LgStraight data={data} setData={setData} dice={dice}  freezeRow={freezeRow}/>
                <Knuffle dice={dice} data={data} freezeRow={freezeRow}
                         knuffle={knuffle} setKnuffle={setKnuffle}
                />
                <Chance  dice={dice} data={data} freezeRow={freezeRow}/>
                <TotalLeft 
                    data={data} 
                    playSignal={playSignal}
                    countLeft={countLeft} 
                    setCountLeft={setCountLeft}             
                />
                <TotalRight />
                <OverallScore />

            </ul>
        </div>
    );
}


export default Rows;