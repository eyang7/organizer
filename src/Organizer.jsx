import React from "react"; 
import Navbar from './Navbar'; 
import Category from './Category'; 
import Button from "react-bootstrap/Button"; 
import {useState} from "react"; 

// const [tabs, addToTab] = useState([]);  //empty list of tab components 

const Organizer = () => {
    // const states
    const [isSubmit, changeSubmit] = useState(false); 
    const [tabs, updateTabs] = useState([]);
    const [curr, updateCurr] = useState(""); 
    const [index, updateIndex] = useState(0); 

    // helper functions
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // const newTab = CreateTab(curr); 
        updateTabs([...tabs, curr]); 
        updateIndex(0); 
        updateCurr(""); 
        changeSubmit(true);  //TODO: fix bc everytime it will now be true and display everything
    }

    function DisplayTabs() {
        if (isSubmit) {
            return (
                tabs.map((tab) => <li>{tab} </li>)  //fix mapping all arrays
            ); 
        }
    }
    
    return (
        <div> 
            {CreateTab("test")}
        </div>
    ); 
    // return(
    //     <div className="app">
    //         <Navbar/> 
            
    //         <div className = "category"> 
    //         <form onSubmit = {(e) => handleSubmit(e)}> 
    //             <input type = "text" value = {curr} placeholder="Add new tab..." autocomplete="off" required 
    //             onChange = {(e) => {updateCurr(curr + e.target.value[index]); updateIndex(index +1)}}/>
    //             {/* add if value is backspace delete the index */}
    //         </form>
    //         </div>


    //         {/* this is where teh tabs will go */}

    //         <div className = "tabs">
    //         <ul id = "tabs-list">
    //         <div className = "newTab"> {DisplayTabs()} </div>
    //         </ul>
    //         </div>


    //         {/* clear button that resets everything */}
    //         <Button id = "reset"/*onClick={}*/> Reset </Button>
    //     </div>

    //     // {/* each tab data using Node.js and then display tabs through frontend */}
    // ); 
}

export default Organizer; 

// tab component => 
const CreateTab = (name) => {

    function DisplayTabItem() {
        if (isSubmit) {
            return (
                items.map((item, idx) => <li id = "tab-item">
                    <CheckBox idx = {idx}/> 
                    {item} </li>)  //fix mapping all arrays
            ); 
        }
    }

    const CheckBox = (idx) => {
        const [checked, setChecked] = useState(false); 

        const handleChange = () => {
            setChecked(!checked); 
            if (checked === false) {
                removeItem(idx); 
            }
        }
        
        return (
            <label>
                <input type = "checkbox"
                    defaultChecked = {checked} onClick = {handleChange}/>
            </label>
        ); 
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        updateItems([...items, curr]); 
        updateSubmit(true); 
        updateIndex(0); 
        updateCurr(""); 
    }

    function removeItem(idx) {
        var leftSide = items.slice(0, idx); 
        var rightSide = items.slice(idx + 1, items.length); 
        updateItems([...leftSide, ...rightSide]);  
        DisplayTabItem(); 
    }

    const [tabIndex, updateIndex] = useState(0); 
    const [curr, updateCurr] = useState(""); 
    const [isSubmit, updateSubmit] = useState(false); 
    const [items, updateItems] = useState([]); 

    return (
        <div className = "tab"> 
            <h3> {name} </h3>

            <ul className = "tab-list"> {DisplayTabItem()} </ul>

            <div className = "tab-items"> 
            <form onSubmit = {(e) => handleSubmit(e)}> 
                <input type = "text" value = {curr} placeholder="List new item..." autocomplete="off" required 
                onChange = {(e) => {updateCurr(curr + e.target.value[tabIndex]); updateIndex(tabIndex +1)}}/>
            </form>
            </div>
        </div>
    ); 
}



// might need a backend so that the data can persist from server to server 