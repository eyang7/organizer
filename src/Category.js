import React from "react";
import './Category.css'; 
import {useState} from "react"; 


// constants that change state 
const [value, setValue] = useState(); //value of the input form 

// functional component to return 
const Category = () => {
    return (
        <div className = "category">
            <button className = "category-button" onClick={AddTab}> New Tab </button>
            
            {/* want to return tab value as well */}

        </div>

    ); 
}

export default Category; 

// need to create a tab component using dictionary of tab name to metadata 

// Helper functions 
function AddTab() {

    const onFormSubmit = (event) => {
          event.preventDefault(); 
          const username = event.target[0].element; 
          setValue(username.value); 
    }; 
  
    return (
        <form onSubmit={onFormSubmit}>
        <input type="text" id = "username"/>
        <input type = "submit"/> 
        </form>
    ); 
}
