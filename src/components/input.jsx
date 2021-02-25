import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './input.css'

import { saveTodo } from '../features/todoSlice'
import { useSnackbar } from 'notistack';



const Input = () => {
   const [Input, setInput] = useState('');
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();



   const addTodo = () => {
      const action = saveTodo({
         item: Input,
         done: false,
         id: Date.now(),
      });

      dispatch(action);
      setInput('');
      enqueueSnackbar('This is a success message!', { variant: 'success', autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: "right" } });
   }

   return (
      <div className='inputForm'>
         <input type="text" value={Input} onChange={e => setInput(e.target.value)} />
         <button onClick={addTodo}>Add</button>
      </div>
   )
}

export default Input
