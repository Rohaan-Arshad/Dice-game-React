// Body.jsx
import React from 'react';
import styled from 'styled-components';

const Body = ({ data, searchValue }) => {
  return (
    <div>
      <Conta>
      {data
        .map(item => (
          <div className='set' key={item.id}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className='nice'>
              <h2>{item.id} . {item.title}</h2>
              <h4>{item.description}</h4> 
              <div className="desc">
                <div className="desc1">
                  <p></p>Price
                  <h3>{item.price}</h3>
                </div>
                <div className="desc1">
                  <p></p>Category
                  <h3>{item.category}</h3>
                </div>
                <div className="desc1">
                  <p></p>Rating
                  <h3>{item.rating.rate}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Conta>
    </div>
  );
};

export default Body;

const Conta = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  .set{
    background-color: white;
    height: 380px;
    width: max-content;
    display: flex;
    padding: 10px;
    border:1px solid red;
    margin: 10px;
    &:hover{
        transition: 0.2s ease-in-out;
        padding:15px;
        cursor:pointer;
    }
  }
  .nice{
    padding:5px;
  }
  h4,h2{
    width:400px;
  }
  .desc{
    display: flex;
    gap:20px;
    background-color: grey;
    height: 40px;
    padding:8px;
  }
  p{
    margin: 10px;
  }
  .image img{
    width: 160px;
    height:183px;
    background-position: cover;
  }
  .desc1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100px;
  }
  h3{
    margin-top: -4px;
  }
`;
