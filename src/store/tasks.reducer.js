const tasks = (state=[], action)=> {
    if(action.type === 'SET_TASKS'){
        return action.tasks;
    }
    if(action.type === 'DELETE_TASK'){
        const tasks = state.filter(task => task.id !== action.id);
        return tasks;
    }
    console.log(action.users);
    return state;
}

export default tasks;