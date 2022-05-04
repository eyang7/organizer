import React, {useState, useEffect} from "react"; 
import Navbar from './Navbar'; 
import Category from './Category'; 
import { CreateTab } from "./CreateTab";  //empty list of tab components 
import { Wrap, Input, Button, VStack} from "@chakra-ui/react";
import { serializeStyles } from "@emotion/serialize";

const Organizer = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setItems([...items, curr ]); 
        console.log(curr)
        updateCurr(""); 
    }

    const handleReset = (e) => {
        e.preventDefault(); 
        setItems([]); 
        updateCurr(""); 
    }
    const [items, setItems] = useState([])
    const [curr, updateCurr] = useState(""); 

    useEffect(() => {
        const data = window.localStorage.getItem('items'); 
        // const data1 = window.localStorage.getItem('curr'); 
        if (data) {
            setItems(JSON.parse(data)); 
        }
        // if (data1) {
        //     updateCurr(JSON.parse(data1)); 
        // }
    },[]); 

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items)); 
        // window.localStorage.setItem('curr', JSON.stringify(curr)); 
    }, [items, curr]); 

    return (
        <VStack>
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
             <Wrap justify = "center" spacing= "100px" > {items.map((item, idx) => <CreateTab key= {idx} name= {item} />)} </Wrap>
             </ul>
             </div>
             
            
             <Button id = "reset" onClick = {(e) => handleReset(e)}> Reset </Button>
        </VStack>
    )

    //     // {/* each tab data using Node.js and then display tabs through frontend */}
    // ); 
}

export default Organizer; 

// tab component => 


// might need a backend so that the data can persist from server to server 