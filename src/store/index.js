console.log('store');
//set up store
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import tasks from './tasks.reducer.js';
import users from './users.reducer.js';





const reducer = combineReducers({
    tasks: tasks,
    users: users
})

const store = createStore(reducer, applyMiddleware(logger)); 

export default store;