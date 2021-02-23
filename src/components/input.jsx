import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './input.css'

import { saveTodo } from '../features/todoSlice'



const Input = () => {
   const [Input, setInput] = useState('');
   const dispatch = useDispatch();


   const addTodo = () => {
      const action = saveTodo({
         item: Input,
         done: false,
         id: Date.now(),
      });

      dispatch(action);
      setInput('');
   }

   return (
      <div className='inputForm'>
         <input type="text" value={Input} onChange={e => setInput(e.target.value)} />
         <button onClick={addTodo}>Add</button>
      </div>
   )
}

export default Input
