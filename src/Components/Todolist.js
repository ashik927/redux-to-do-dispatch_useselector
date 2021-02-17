import React from 'react';
import { useSelector } from 'react-redux';
import Todoitem from './Todoitem';

const Todolist = () => {
    let todos = useSelector(state=>state);
    return (
        <div>
            <h1 className="my-4"> Todolist</h1>
            {
                todos.map(todo =>{
                    return <Todoitem key={todo.id} todo={todo}></Todoitem>
                })
            }

        </div>
    );
};

export default Todolist;