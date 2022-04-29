import React from "react";
import './Category.css'; 
import {useState} from "react"; 


// constants that change state 

// functional component to return 
// const Category = () => {    
//     return (
//         <div className = "category">
//             <button className = "category-button" onClick={() => AddTab()}> New Tab </button>
//         </div>

//     ); 
// }

// export default Category; 

$('form').submit(function(e) {
    e.preventDefault(); 

    $('#tabs').append($('<li id="list">').text($('#m').val()));
})

// need to create a tab component using dictionary of tab name to metadata 

// helper functions
function AddTab() {
    return (
        <form> 
            <input id="m" placeholder="Enter your message..." autocomplete="off" required />
        </form>
    ); 
}

// <div className = "category">
//     <button className = "category-button" onClick={() => AddTab()}> New Tab </button>
//  </div>