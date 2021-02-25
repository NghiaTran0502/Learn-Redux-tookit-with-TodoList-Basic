import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/input';
import TodoItem from './components/todoItem';
import { selectTodoList } from './features/todoSlice';


function App() {

  const todoList = useSelector(selectTodoList);

  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo_item">
          <h2>Todo list</h2>
          {
            todoList.map(todo =>
              // todoComponent
              (<TodoItem name={todo.item} id={todo.id} done={todo.done} key={todo.id} />)
            )
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
