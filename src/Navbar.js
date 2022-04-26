import React from "react";
import './Navbar.css'; 
import {useState} from "react"; 
import Form from 'react-bootstrap/Form'; 

const [activeTab, setActiveTab] = useState(/* switch to thsi page */)

const [tabs, addToTab] = useState([]) //empty list of tabs 

const AddTab = () => {

    const [value, setValue] = useState(); 
    const onInput = ({target:{value}}) => {setValue(value)}; 
    const onFormSubmit = e => {
          e.preventDefault()
          addToTab(tabs.push(value))
          setValue()
        }; 
  
    return (
        <Form onSubmit={onFormSubmit}>
        <Form.Control 
            type="text" 
            onChange={onInput} 
            value={value}
        />
        <Button type="submit">
            Submit
        </Button>
        </Form>
    ); 
}

const DisplayTabs = () => {
    return (
        <li className="navbar-item">
            {/* want to make this a link to its direct tab */}
        </li>
    ); 
    // display all the tabs in state in the navbar 
}


const Navbar = () => {
    return (
        <div className = "navbar">
        
            <div className = "navbar-icon"> 
                <h3 id = "title"> Organizer </h3>
            </div> 

            <ul>
                <button onClick={AddTab()}> New Tab </button>
                    {/* want new tab to continue adding tabs to navbar  */}
                DisplayTabs(); 
            </ul>
    
        </div>

    ); 
}

export default Navbar