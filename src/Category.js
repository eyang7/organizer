import React from "react";
import './Category.css'; 
import {useState} from "react"; 


// constants that change state 

// functional component to return 
const Category = () => {   
    const [tab, setTab] = useState(''); 
    const [isSubmit, changeSubmit] = useState(false); 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        changeSubmit(true); 
    }

    function DisplayTabs() {
        if (isSubmit) {
            return (
                <li> {tab} </li>
            ); 
        }
    }
    return (
        <div className = "category"> 
            <form> 
                <input type = "text" placeholder="Add new tab..." autocomplete="off" required 
                    value = {tab} 
                    onChange={(e) => setTab(e.target.value)} />
                <button type = "submit" value = "Submit" onClick={(e) => handleSubmit(e)}> Submit</button>
            </form>
        <div className = "newTab"> {DisplayTabs()} </div>
        </div>
    ); 
}

export default Category; 

// need to create a tab component using dictionary of tab name to metadata 