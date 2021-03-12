import React, {useState} from 'react';
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
import Interaction2 from './Interaction2';



const Rows = () => {
    // const [Numbers, setNewNumbers] = useState([]);
    // const [Dice1, setDice1] = useState();
    // const [Dice2, setDice2] = useState();
    // const [Dice3, setDice3] = useState();
    // const [Dice4, setDice4] = useState();
    // const [Dice5, setDice5] = useState();

    const [rollsCount, setRollsCount] = useState(3);
    const [Dices, setDices] = useState(
        [
            { id: 0, 
            number: 0,
            checked: false
            },
            { id: 1, 
            number: 0,
            checked: false
            },
            { id: 2, 
            number: 0,
            checked: false
            },
            { id: 3, 
            number: 0,
            checked: false
            },
            { id: 4, 
            number: 0, 
            checked: false
            } 
        ]
    )

    return(
        <div className='rowsContainer'>
            <ul className='leftContainer'>
                <Aces />
                <Twos />
                <Threes />
                <Fours />
                <Fives />
                <Sixes />
                <Bonus />
                <TotalLeft />
                {/* <Interaction rollsCount={rollsCount} 
                             setRollsCount={setRollsCount}

                             Dice1={Dice1} setDice1={setDice1}
                             Dice2={Dice2} setDice2={setDice2}
                             Dice3={Dice3} setDice3={setDice3}
                             Dice4={Dice4} setDice4={setDice4}
                             Dice5={Dice5} setDice5={setDice5}
                /> */}
                <Interaction2 
                rollsCount={rollsCount} 
                setRollsCount={setRollsCount}
                Dices={Dices}
                />


            </ul>


            <ul className='rightContainer'>
                <ThreeOfAKind />
                <FourOfAKind />
                <FullHouse />
                <SmStraight />
                <LgStraight />
                <Knuffle />
                <Chance />
                <TotalLeft />
                <TotalRight />
                <OverallScore />

            </ul>
        </div>
    );
}


export default Rows;