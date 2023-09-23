import React, { useState } from 'react';
import Home from './home.jsx';
import GamePlay from './GamePlay.jsx';

const Main = () =>{
    const [gameStart,setGameStart] = useState(false);

    const toggleGamePlay=()=>{
        if(gameStart === false){
            setGameStart(true);
        }
        else{
            setGameStart(false);
        }
    }
  return (
    <>
        {gameStart ? <GamePlay/> : <Home toggle={toggleGamePlay}/>} 
    </>
  );
}

export default Main;