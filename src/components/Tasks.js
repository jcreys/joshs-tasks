import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux'; //users gets past in with connect

//run quick filter to find tasks that have the user id for particular user
const Tasks = ({users, tasks, destroy})=>{
    return(
        <ul>
            {
                tasks.map( task=> {
                    const user = users.find( user => user.id === task.userId);
                    return(
                        <li key={ task.id}> 
                            { task.name }
                            <button onClick={()=>destroy(task.id)}>x</button>
                            <br />
                            ({user ? user.firstName : ''})
                        </li>
                    );
                })
            }
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        destroy: (id)=> {
            axios.delete(`/api/tasks/${id}`);
            dispatch({type: 'DELETE_TASK', id: id})
        }

    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         destroy: async(task)=> {
//             // TDODO make axios call to delete the task
//             // dispatch an action to remove from store
//             await axios.delete(`/tasks/${task.id}`);
//             dispatch({type: 'DESTROY_TASK', task})
//             window.id = id;
//         }

//     };
// }
export default connect(state => state, mapDispatchToProps)(Tasks); //need state for entire component