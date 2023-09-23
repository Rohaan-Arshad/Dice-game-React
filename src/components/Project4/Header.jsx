// Header.jsx
import React, { useState } from 'react'
import styled from 'styled-components';

const Header = ({ setSearchValue }) => {

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <Body>
        <New>
        <Container>
            <div className="head">
                <h1>g<span>IT</span>hub<span> Us</span>ers</h1>
            </div>
            <div className="input">
                <input type="text" placeholder='Search Person ..' onChange={handleInputChange} />
            </div>
        </Container>
        </New>
    </Body>
  )
}

export default Header

const Body = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const New = styled.div`
  height: 200px;
  background-color: #504c4c;
  display: flex;
  flex-direction: column;
  gap:40px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap:60px;

  .input {
    margin-top: 30px;
  }

  .input input {
    border:1px solid red;
    font-size:18px;
    background-color: transparent;
    border-radius: 3px;
    padding:6px;
    color: white;
  }

  input::placeholder {
    color: white;
  }

  .input input:focus {
    border: 1px solid red;
    outline:none;
  }

  h1 {
    color:white;
    word-spacing:10px ;
  }

  h1 span {
    color:red;
  }
`;
