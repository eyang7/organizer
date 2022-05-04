import React, {useState} from "react"; 
import Navbar from './Navbar'; 
import Category from './Category'; 
import Button from "react-bootstrap/Button"; 
import { CreateTab } from "./CreateTab";  //empty list of tab components 
import { Wrap, Input} from "@chakra-ui/react";
const Organizer = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setItems([...items, curr ]); 
        console.log(curr)
        updateCurr(""); 
    }
    const [items, setItems] = useState([])
    const [curr, updateCurr] = useState(""); 
    return (
        <div className="app">
            <Navbar/> 

            <div className = "category"> 
            <form onSubmit = {(e) => handleSubmit(e)}> 
                <Input isRequired= {true} type = "text" value = {curr} placeholder="Add new tab..."
                onChange = {(e) => updateCurr(e.target.value)}/>
            </form>
            </div>

             {/* this is where the tabs will go */}

             <div className = "tabs">
             <ul id = "tabs-list">
             <Wrap spacing= "100px" > {items.map((item, idx) => <CreateTab key= {idx} name= {item} />)} </Wrap>
             </ul>
             </div>
             {/* clear button that resets everything */}
             <Button id = "reset"/*onClick={}*/> Reset </Button>
         </div>
    )

    //     // {/* each tab data using Node.js and then display tabs through frontend */}
    // ); 
}

export default Organizer; 

// tab component => 


// might need a backend so that the data can persist from server to server 