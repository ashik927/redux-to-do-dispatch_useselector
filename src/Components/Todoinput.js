import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../Redux/Action';
import {v1 as uuid} from 'uuid';
const Todoinput = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState();
    return (
        <div>
            <div className="row m-2">
                <input className="col form-control" name="name" onChange={(e)=>setName(e.target.value)} type="text"></input>
                <button className="btn btn-primary mx-2" onClick={()=>dispatch(addtodo({id:uuid(),name:name}))}> add</button>
            </div>
        </div>
    );
};

export default Todoinput;