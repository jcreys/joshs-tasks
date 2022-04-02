import React from 'react';
import { connect } from 'react-redux'; //users gets past in with connect
//run quick filter to find tasks that have the user id for particular user
const Tasks = ({users, tasks})=>{
    return(
        <ul>
            {
                tasks.map( task=> {
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
    );
};

export default connect(state => state)(Tasks); //need state for entire component