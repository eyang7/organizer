import React from "react";
import './Navbar.css'; 


const AddTab = () => {
    return (
        <form> 
            <input type = "text" placeholder="Name this tab"> </input>
            <button> Submit </button>
        </form>
    
    ); 
}


const Navbar = () => {
    return (
        <div className = "navbar">
        
            <div className = "navbar-icon"> 
                <h3 id = "title"> Organizer </h3>
            </div> 

            <ul>
                <button /*onClick={AddTab()}*/> New Tab </button>
                <li className="navbar-item"></li>
                {/* want new tab to continue adding tabs to navbar  */}
            </ul>
        
        </div>

    ); 
}

export default Navbar