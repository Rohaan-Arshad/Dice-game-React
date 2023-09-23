import { useState } from 'react';
import React from 'react';
import GamePlayHead from './GamePlayHead.jsx';
import RollDice from './RollDice.jsx';
import styled from 'styled-components';

const GamePlay = () => {
    const [value, setValue] = useState();
    const [image, setImage] = useState("/images/dice/dice_1.png");
    const [score, setScore] = useState(0);
    const [msg, setMsg] = useState("Choose Number");
    const [isLogged, setIsLogged] = useState(true);
    const [showRules, setShowRules] = useState(false);

    const rohaan = () => {
        setScore(0);
    }

    
    const rollDice = () => {
        setIsLogged(false);
        if (!value) {
            setMsg("Please Select A number !");
            return; 
        }
        
        
        const min = 1;
        const max = 6;
        const randomInRange = Math.floor(Math.random() * (max - min + 1) + min);
        const newImage = `/images/dice/dice_${randomInRange}.png`;
        setMsg("Your selected number : " + value+" and " + "number generated is : "+randomInRange );
        setImage(newImage);
        if (randomInRange === value) {
            setScore((prev) => prev + randomInRange);
        } else if (randomInRange !== value) {
            setScore((prev) => prev - 2);
        }
        setValue(undefined);
    }

    const toggleRules = () => {
        setShowRules(!showRules);
    }

    return (
        <div>
            <GamePlayHead isLogged={isLogged} msg={msg} score={score} value={value} setValue={setValue} />
            <RollDice image={image} rollDice={rollDice} />

            <Nice>
                <button onClick={rohaan}>Reset Score</button>
                <button onClick={toggleRules}>Show Rules</button>

                {showRules && (
                    <div className='last'>
                        <h1>How to Play Dice Game</h1>
                        <ul>
                            <li><p>Select any number</p></li>
                            <li><p>Click on dice image</p></li>
                            <li><p>If the selected number is equal to dice number, you will get some points. If you get the wrong guess, then 2 points will be deducted</p></li>
                        </ul>
                    </div>
                )}
            </Nice>
        </div>
    )
}

export default GamePlay;

const Nice = styled.div`
    display: grid;
    place-items: center;

    button {
        width: 200px;
        height: 40px;
        font-size: 18px;
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid black;
        margin-bottom: 15px;
    }

    button:hover {
        color: white;
        background-color: black;
        cursor: pointer;
    }

    .last {
        font-size: 11px;
        background-color: #00000039;
        line-height: 0.9;
        padding: 15px;
        max-width: 1000px;
        height: 100px;
    }
`;
