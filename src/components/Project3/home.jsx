import React from 'react'
import styled from 'styled-components';


const Home = ({toggle}) => {
  return (
    <div>
        <Main>
            <Image src="./images/dices.png" alt="" />

            <Desc>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button> 
            </Desc>   
        </Main>
    </div>
  )
}

export default Home

const Desc = styled.div`
  display:flex;
    flex-direction:column;
    gap:10px;

    h1{
        font-size: 70px;
    font-weight: 900;
    white-space: nowrap;
    }
`;

const Main = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 1190px;
    gap: 60px;
`;

const Image = styled.img`
width:450px;
    height: 400px;
`;
const Button = styled.button`
 align-self: flex-end;
    background-color: black;
    color: white;
    border: none;
    border-radius:6px;
    padding: 8px;
    font-size: 18px;
    width: 120px;

    &:hover{
        background-color: rgba(255, 252, 252, 0.678);
    transition: ease-in-out 0.2s;
    border
    :1px solid black;
    color: black;
    }
`;

