import React from 'react'
import styled from 'styled-components';


const Button = (props) => {
  return (
    <div>
        <Button1 >
            {props.text}
        </Button1>
    </div>
  )
}

export default Button

const Button1 =styled.button`

background-color:red;
padding: 9px;
font-size: large;
border:none;
border-radius:7px;
cursor: pointer;

&:hover{
    background-color:transparent;
    color:white;
}
`;