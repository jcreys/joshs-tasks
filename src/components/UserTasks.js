import React from 'react';
import { connect } from 'react-redux'; //users gets past in with connect
//run quick filter to find tasks that have the user id for particular user
const UserTasks = ({users, tasks, match})=>{
    console.log(match);
    return(
        <div>
            <h2>User Tasks</h2>
            <ul>
                {
                    tasks.filter(task=> task.userId === match.params.id * 1).map( task=> {
                        const user = users.find( user => user.id === task.userId);
                        return(
                            <li key={ task.id}> 
                                { task.name }
                                <br />
                                ({user ? user.firstName : ''})
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default connect(state => state)(UserTasks); 

//need state for entire component