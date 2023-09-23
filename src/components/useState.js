import React,{ useState }from 'react';

const UseComponent =() =>{


const [name, setName] = useState("Rohaan Arshad");

  const nice = () => {
    setName("I study in PUCIT");
  };
  


  return (
      <div>
      <h1>{name}</h1>
      <button onClick={nice}>Click Me</button>
      </div>
  );
}
export default  UseComponent;