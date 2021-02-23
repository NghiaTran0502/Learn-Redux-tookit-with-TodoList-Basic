import { Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';
import './todoItem.css';

const TodoItem = (props) => {
   const { name, done, id } = props;
   const dispatch = useDispatch();

   const handelCheck = () => {
      dispatch(setCheck(id))
   }

   return (
      <div className='item'>
         <Checkbox
            checked={done}
            color='primary'
            onChange={handelCheck}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
         />
         <p className={done ? 'item--done' : ''}>{name}</p>
      </div>
   )
}

TodoItem.propTypes = {
   name: PropTypes.string,
   done: PropTypes.bool,
   id: PropTypes.number,
}

export default TodoItem

