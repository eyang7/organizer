import React from "react"; 
import Navbar from './Navbar'; 
import Category from './Category'; 
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
    
    return(
        <div className="app">
            <Navbar/> 
            
            <div className = "category"> 
            <form onSubmit = {(e) => handleSubmit(e)}> 
                <input type = "text" value = {curr} placeholder="Add new tab..." autocomplete="off" required 
                onChange = {(e) => {updateCurr(curr + e.target.value[index]); updateIndex(index +1)}}/>
            </form>
            </div>

            {/* this is where teh tabs will go */}
            <ul id = "tabs">
            <div className = "newTab"> {DisplayTabs()} </div>
            </ul>


            {/* clear button that resets everything */}
        </div>

        // {/* how to return a value(name) to add to addToTab ==> need a GET request to get info */}
        // {/*create a tab component if necessary, and then add to tabs state*/
        // {/* each tab data using Node.js and then display tabs through frontend */}
        // {/* DisplayTabs();  */}
    ); 
}

export default Organizer; 
