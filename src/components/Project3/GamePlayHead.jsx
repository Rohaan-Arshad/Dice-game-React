import React from 'react'
import styled from 'styled-components'

const GamePlayHead = ({value,setValue,score,msg,isLogged}) => {


  return (
    <div>
        <Main>
            <Left>
                <h1>{score}</h1>
                <h2>Total Score</h2>
            </Left>

            <Right>
                <div>
                <Button 
                isSelected={value === 1}
                onClick={()=>setValue(1)}>1</Button>
                <Button 
                isSelected={value === 2}
                onClick={()=>setValue(2)}>2</Button>
                <Button
                isSelected={value === 3} onClick={()=>setValue(3)}>3</Button>
                <Button
                isSelected={value === 4} onClick={()=>setValue(4)}>4</Button>
                <Button
                isSelected={value === 5} onClick={()=>setValue(5)}>5</Button>
                <Button
                isSelected={value === 6} onClick={()=>setValue(6)}>6</Button>
                </div>
                <h5>{msg}</h5>
            </Right>
        </Main>

    </div>
  )
}

export default GamePlayHead

const Main = styled.div`
display:flex;
justify-content: space-between;
padding: 10px;
margin:10px;
max-width:1100px;
margin:0 auto;
`;

const Button = styled.button`
border: 1px solid black;
padding: 13px;
margin: 6px;
text-align: center;
font-size: 18px; 
background-color : ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => props.isSelected ? "white" : "black"};

&:hover{
background-color: black;
color :white;
cursor :pointer;
}
`;

const Left = styled.div`
    
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


h1{
    font-size: 40px;
    font-weight:1300
}
h2{
    margin-top: -110px;
}

`;
const Right = styled.div`
    
display: flex;
flex-direction: column;

h5{
    height: 120px;width:300px;
    font-size: 20px;
    align-self: flex-end;
    margin-top: -1px;
    color: ${(props) => props.isLogged ? "black" : "red"};
}
`;
