console.log('store');
//set up store
import { createStore, combineReducers } from 'redux';
import tasks from './tasks.reducer.js';
import users from './users.reducer.js';





const reducer = combineReducers({
    tasks: tasks,
    users: users
})

const store = createStore(reducer); 

export default store;