import React from 'react'
import {useState} from 'react'
import './Contact.css';
import {MdMessage} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {

    const [name, setName] = useState("Rohaan");
const [email, setEmail] = useState("jutt112@gmail.com");
const [text, setText] = useState("this is good boy");


    const viaCaall =() =>{
        console.log("calll");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
      
        console.log(name, email, text);
      };
      


  return (
    <div className="nice">
        <h1>Contact US</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ea? Voluptatum minima fuga at, consectetur vitae accusamus sequi tempore dolores!stinctio aperiam. Voluptatem aliquam odit ducimus natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eligendi.
        </p>

        <div className="main">
            <div className="left">
                <div className="buttons">
                    <button className="button">
                     <MdMessage fontSize="20px"/> 
                    VIA SUPPORT CHAT
                    </button>

                    <button className="button"
                    onClick= {viaCaall}>
                    <BsTelephone fontSize="20px"/> 
                        VIA CALL
                        </button>
                </div>
                <button className="email">
                <AiOutlineMail fontSize="20px"/>
                    VIA EMAIL FORM</button>
                <div className="form" >
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">Name</label>
                        <input type="text" />
                        <label htmlFor="">E-mail</label>
                        <input type="text" />
                        <label htmlFor="">Text</label>
                        <input type="text" />
                        <button id="buto" type="submit" className="button">SUBMIT</button>

                        <div>
                            {name + "    " + email + "   " + text}
                        </div>
                    </form>
                </div>
            </div>
            <div className="right">
                <img src="/images/service.svg" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Contact