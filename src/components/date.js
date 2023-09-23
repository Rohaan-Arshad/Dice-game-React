import React from 'react';

const GetDate = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <p>Current date is: {date}</p>
      <p>Current time is: {time}</p>
    </div>
  );
};

export default GetDate;
