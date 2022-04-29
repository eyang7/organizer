import React from "react"; 
import Navbar from './Navbar'; 
import Category from './Category'; 
import {useState} from "react"; 

// const [tabs, addToTab] = useState([]);  //empty list of tab components 

const Organizer = () => {
    // const states
    const [tab, setTab] = useState(''); 
    const [isSubmit, changeSubmit] = useState(false); 
    const [tabs, updateTabs] = useState([]); //fix array 

    // helper functions
    const handleSubmit = (e) => {
        e.preventDefault(); 
        changeSubmit(true); 
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
            <form> 
                <input type = "text" placeholder="Add new tab..." autocomplete="off" required 
                    value = {tab} 
                    onChange={(e) => updateTabs(tabs.push(e.target.value))} />
                <button type = "submit" value = "Submit" onClick={(e) => handleSubmit(e)}> Submit</button>
            </form>
            </div>

            {/* this is where teh tabs will go */}
            <ul id = "tabs">
            <div className = "newTab"> {DisplayTabs()} </div>
            </ul>


        </div>

        // {/* how to return a value(name) to add to addToTab ==> need a GET request to get info */}
        // {/*create a tab component if necessary, and then add to tabs state*/}
        // {/* each tab data using Node.js and then display tabs through frontend */}
        // {/* DisplayTabs();  */}
    ); 
}

export default Organizer; 
