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
    const [dices, setDices] = useState([]);

    const [countOnes, setCountOnes] = useState(0);
    const [countTwos, setCountTwos] = useState(0);
    const [countThrees, setCountThrees] = useState(0);
    const [countFours, setCountFours] = useState(0);
    const [countFives, setCountFives] = useState(0);
    const [countSixes, setCountSixes] = useState(0);

    const [countLeft, setCountLeft] = useState(0);
    const [bonus, setBonus] = useState(0);

    const [smallStraight, setSmallStraight] = useState(0);
    const [largeStraight, setLargeStraight] = useState(0);





    return(
        <div className='rowsContainer'>
            <ul className='leftContainer'>
                <Aces dices={dices} countOnes={countOnes} setCountOnes={setCountOnes} />
                <Twos dices={dices} countTwos={countTwos} setCountTwos={setCountTwos} />
                <Threes dices={dices} countThrees={countThrees} setCountThrees={setCountThrees} />
                <Fours dices={dices} countFours={countFours} setCountFours={setCountFours} />
                <Fives dices={dices} countFives={countFives} setCountFives={setCountFives} />
                <Sixes dices={dices} countSixes={countSixes} setCountSixes={setCountSixes} />
                <Bonus bonus={bonus} setBonus={setBonus} countLeft={countLeft} />
                <TotalLeft countLeft={countLeft} setCountLeft={setCountLeft}
                           countOnes={countOnes} countTwos={countTwos}
                           countThrees={countThrees} countFours={countFours}
                           countFives={countFives} countSixes={countSixes}             
                />
                <Interaction numberRolls={numberRolls} 
                             setNumberRolls={setNumberRolls}
                             dices={dices}
                             setDices={setDices}

                />

            </ul>


            <ul className='rightContainer'>
                <ThreeOfAKind />
                <FourOfAKind />
                <FullHouse />
                <SmStraight dices={dices} smallStraight={smallStraight} setSmallStraight={setSmallStraight}/>
                <LgStraight dices={dices} largeStraight={largeStraight} setLargeStraight={setLargeStraight}/>
                <Knuffle dices={dices}
                         countOnes={countOnes} countOnes={countTwos}
                         countThrees={countThrees} countFours={countFours}
                         countFives={countFives} countSixes={countSixes}
                />
                <Chance  dices={dices}/>
                <TotalLeft countLeft={countLeft} setCountLeft={setCountLeft}
                           countOnes={countOnes} countTwos={countTwos}
                           countThrees={countThrees} countFours={countFours}
                           countFives={countFives} countSixes={countSixes}             
                />                
                <TotalRight />
                <OverallScore />

            </ul>
        </div>
    );
}


export default Rows;