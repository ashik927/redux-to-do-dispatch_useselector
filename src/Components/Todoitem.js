import React from 'react';
import { useDispatch } from 'react-redux';
import { deletetodo } from '../Redux/Action';

const Todoitem = ({todo}) => {
    const dispatch = useDispatch();
   
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>{todo.id}</div>
                <div className="col">{todo.name}</div>
                <button className="btn btn-primary m-2">edit</button>
                <button className="btn btn-danger m-2" onClick={()=>dispatch(deletetodo(todo.id))}>delete</button>
            </div>
        </div>
    );
};

export default Todoitem;