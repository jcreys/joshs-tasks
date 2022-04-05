import React from 'react';
import { connect } from 'react-redux'; //users gets past in with connect
//run quick filter to find tasks that have the user id for particular user
import { Link } from 'react-router-dom';

const Users = ({users, tasks})=>{
    return(
        <ul>
            {
                users.map( user=> {
                    const usersTasks = tasks.filter( task => task.userId === user.id);
                    console.log(usersTasks.length);
                    return(
                        <li key={ user.id}>
                            <Link to={`/users/${user.id}`}> { user.firstName }({usersTasks.length})</Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

const mapStateToProps = (state)=>{
    const usersWithoutTasks = state.users.filter( user => {
        return state.tasks.filter(task => task.userId === user.id).length === 0;
    });
    return {
        users: usersWithoutTasks,
        tasks: state.tasks
    };
}

export default connect(mapStateToProps )(Users); //need state for entire component