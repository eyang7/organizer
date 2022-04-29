import React from "react"; 
import Navbar from './Navbar'; 
import Category from './Category'; 
import {useState} from "react"; 

// const [tabs, addToTab] = useState([]);  //empty list of tab components 

const Organizer = () => {
    return(
        <div className="app">
            <Navbar/> 
            
            {/* this is where teh tabs will go */}
            <ul id = "tabs"></ul>
            <form> 
                <input id="m" placeholder="Enter your message..." autocomplete="off" required />
            </form>

        <script src="Category.js"></script>
        </div>

        // {/* how to return a value(name) to add to addToTab ==> need a GET request to get info */}
        // {/* <div> <Category/> </div>  */}
        // {/*create a tab component if necessary, and then add to tabs state*/}
        // {/* each tab data using Node.js and then display tabs through frontend */}
        // {/* DisplayTabs();  */}
    ); 
}

export default Organizer; 

// displays all tabs in a list format 
// function DisplayTabs() {
//     return(
//       <ul>
//         {tabs.map(tab => (<li className="tabs-item"> {tab} </li>))}
//       </ul>
//     ); 
// }