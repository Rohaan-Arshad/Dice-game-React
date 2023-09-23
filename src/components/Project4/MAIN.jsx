// MAIN.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

const MAIN = () => {

    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const result = await response.json();
          setData(result);
        } 
        catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
      <div>
          <Header setSearchValue={setSearchValue} />
          <Body data={data} searchValue={searchValue}/>
      </div>
    )
}

export default MAIN;
