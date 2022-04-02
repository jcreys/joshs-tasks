console.log('store');
//set up store
import { createStore, combineReducers } from 'redux';

const tasks = (state=[], action)=> {
    if(action.type === 'SET_TASKS'){
        return action.tasks;
    }
    // console.log(action.users);
    return state;
}
const users = (state=[], action)=> {
    if(action.type === 'SET_USERS'){
        return action.users;
    }
    console.log(action.users);
    return state;
}


const reducer = combineReducers({
    tasks: tasks,
    users: users
})

const store = createStore(reducer); 

export default store;