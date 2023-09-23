import React from 'react';

import './index.css';


const greeting = () => {
    const currentDate = new Date();
const currentHour = currentDate.getHours() + 1;
var hour_final="";

if (currentHour >=5 &&  currentHour<=12)
{
    hour_final = "morning";
}
else if (currentHour >=13 &&  currentHour<=18)
{
    hour_final = "afternoon";
}
else if (currentHour >=19 || currentHour<=4)
{
    hour_final = "night";
}
const greetingStyle = {
    backgroundColor: 'yellow',  
    padding: 10, 
    fontSize:50,
  };
  return (
    <>
    <div className='container'>
      <h1 style={greetingStyle}> Hello Sir, Good <span>{hour_final}</span></h1>
      </div>
    </>
  );
}

export default greeting;
