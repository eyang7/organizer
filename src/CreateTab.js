import React, {useState} from 'react'
import {ListItem} from './ListItem'
import { Input } from '@chakra-ui/react'
export const CreateTab = ({name}) => {

  const handleSubmit = (e) => {
      e.preventDefault(); 
      setItems([...items, curr ]);  
      updateCurr(""); 
  }

  const [items, setItems] = useState([])
  const [curr, updateCurr] = useState(""); 

  function removeItem(key) {
      const new_items = items.filter((_item, idx) => idx !== key)
      setItems(new_items)
  }
  return (
      <div className = "tab"> 
          <h3> {name} </h3>
          <ul className = "tab-list"> {items.map((item, idx) => <ListItem key= {idx} key2 = {idx} text= {item} remove= {removeItem}  />)} </ul>

          <div className = "tab-items"> 
          <form onSubmit = {(e) => handleSubmit(e)}> 
              <Input type = "text" value = {curr} placeholder="List new item..."
              isRequired= {true} onChange = {(e) => {updateCurr(e.target.value)}}/>
          </form>
          </div>
      </div>
  ); 
}
