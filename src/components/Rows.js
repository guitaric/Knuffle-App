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
import Display from './Display';



const Rows = () => {

    const [numberRolls, setNumberRolls] = useState(3);
    const [dice, setDice] = useState([]);
    const [playSignal, setPlaySignal] = useState(0);
    const [playPush, setPlayPush] = useState(0);
    const [playCount, setPlayCount] = useState(0);
    const [message, setMessage] = useState("Press the left button to roll the dice")


    const [countLeft, setCountLeft] = useState(0);
    const [countRight, setCountRight] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const [knuffle, setKnuffle] = useState(0);

    const [data, setData] = useState(
        [
            {
                name: "ones",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "twos",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "threes",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "fours",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "fives",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "sixes",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "threeofakind",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "fourofakind",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "fullhouse",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "smallstraight",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "largestraight",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "knuffle",
                value: 0,
                checked: false,
                frozen: false
            },
            {
                name: "chance",
                value: 0,
                checked: false,
                frozen: false
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
            if(data[i].frozen === false){
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
            if(dataVar[i].checked === true) dataVar[i].frozen = true;
            setData(dataVar)
        }
    }, [playSignal])


    //calculate overall score
    useEffect(() => {
        let sum; 
        sum = countLeft + countRight;
        setTotalScore(sum);
    }, [countLeft, countRight])


    //make total left sum and add bonus
    useEffect(() => {
        let sum = 0;
        let dataVar = [...data]
        for(let i=0; i<6; i++){
            if( dataVar[i].frozen === true) {
                sum += dataVar[i].value
            }
        }
        if(bonus === 35) {
            setCountLeft(sum + 35)
        } else setCountLeft(sum)
    }, [playSignal, bonus])


    //set check to true if it is clicked on 
    const freezeRow = (e) => {
        let theRowId = rowKeys[e.target.id];
        let dataVar = [...data]

        if(dataVar[theRowId].frozen === false){
            if(dataVar[theRowId].checked === true) {
                dataVar[theRowId].checked = false;
            } else {
                dataVar.filter(item => item.frozen === false && item.checked === true)
                       .forEach(item => item.checked = false);
                dataVar[theRowId].checked = true;
            }
            setData(dataVar)
        }
    }


    const play = () => {
        setPlayPush(playPush + 1)
        let dataVar = [...data]
        let checkedRows = dataVar.filter(item => item.checked == true)
        if(checkedRows.length) {
            setPlaySignal(playSignal+1)
            setNumberRolls(3);
    
            dataVar.filter(item => item.checked === false)
                   .forEach(item => item.value = 0)
    
            dataVar.filter(item => item.checked === true)
                   .forEach(item => item.frozen = true)
    
            setData(dataVar)
            setPlayCount(0);
        }
    }


    return(
        <div className='container'>
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
                        bonus={bonus}
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
                        setMessage={setMessage}
                        data={data}
                    />

                </ul>

                <ul className='rightContainer'>
                    <ThreeOfAKind dice={dice} data={data} 
                                setData={setData} freezeRow={freezeRow}
                    />
                    <FourOfAKind dice={dice} data={data} 
                                setData={setData} freezeRow={freezeRow}
                    />
                    <FullHouse dice={dice} data={data} 
                            setData={setData} freezeRow={freezeRow}
                    />
                    <SmStraight data={data} setData={setData} 
                                dice={dice} freezeRow={freezeRow}
                    />
                    <LgStraight data={data} setData={setData} 
                                dice={dice}  freezeRow={freezeRow}
                    />
                    <Knuffle dice={dice} data={data} freezeRow={freezeRow}
                            knuffle={knuffle} setKnuffle={setKnuffle}
                    />
                    <Chance  dice={dice} data={data} 
                            setData={setData} freezeRow={freezeRow}
                    />
                    <TotalLeft 
                        data={data} 
                        bonus={bonus}
                        playSignal={playSignal}
                        countLeft={countLeft} 
                        setCountLeft={setCountLeft}             
                    />
                    <TotalRight 
                        data={data} 
                        playSignal={playSignal}
                        countRight={countRight} 
                        setCountRight={setCountRight} 
                    />
                    <OverallScore 
                        totalScore={totalScore}
                    />
                </ul>
            </div>

            <Display 
                data={data}  
                totalScore={totalScore}  
                playSignal={playSignal}
                playPush={playPush}
                playCount={playCount}
                setPlayCount={setPlayCount}
                message={message}
                setMessage={setMessage}
                numberRolls={numberRolls}
            />
        </div>
        
    );
}


export default Rows;