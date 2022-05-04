import { VStack } from '@chakra-ui/react';
import React, {useState} from 'react'

export const ListItem = ({key2, text, remove}) => {
    const [checked, setChecked] = useState(false); 

    const handleChange = () => {
        console.log(key2)
        setChecked(!checked); 
        remove(key2)
    }
    return (
        <div>
            <label>
            <input type = "checkbox"
                checked = {checked} onChange = {handleChange}/>
            <span>{text}</span>
            </label>
            
        </div>
        
        
    ); 
}
