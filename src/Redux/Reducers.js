import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./Action"
import { todos } from "./States";

export let reducers = (state=todos,actions) =>{
    let newtodos;
    switch(actions.type){
        case ADD_TODO:
             newtodos = [...state];
             newtodos.push(actions.payload);
            return newtodos;
        case DELETE_TODO:
             newtodos = [...state];
            newtodos = newtodos.filter(news =>news.id != actions.payload)
            return newtodos;
        case UPDATE_TODO:
            break;
        default:
            return state;
    }
    return state;

}