import React, {useState} from 'react'

export const CheckBox = (key, updateItems) => {
    const [checked, setChecked] = useState(false); 

    const handleChange = () => {

        setChecked(!checked); 
        updateItems(key)
    }
    
    return (
        <label>
            <input type = "checkbox"
                checked = {checked} onChange = {handleChange}/>
        </label>
    ); 
}
