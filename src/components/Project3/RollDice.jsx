import React, { useState } from 'react';
import styled from 'styled-components';

const RollDice = ({image,rollDice}) => {

    

    return (
        <Dice>
            <div className='image' >
                <img src={image} onClick={rollDice} alt="" />
                <p>Click on Dice to play</p>
                
            </div>
        </Dice>
    )
}

export default RollDice

const Dice = styled.div`
    .image {
        display: grid;
        place-items:center;
    }
    .image img{
        cursor:pointer;
    }
    p{
        font-size: 20px;
    }
    
`;
