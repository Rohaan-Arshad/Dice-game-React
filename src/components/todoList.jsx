import React from "react";
import '../index.css'

const Todo = () =>{
    return (
        <>
        <div className="container">
        <div className="sub-container">
            <h2>Add your List here </h2>
            <input type="text" placeholder="Add item .." />
            <div className="addite">
                <div></div>
            </div>
            <button> check List </button>

            </div>

        </div>
        
        
        </>
    );
}
export default Todo;