import React from 'react';
import { connect } from 'react-redux';

//how to get tasks and users need to connect them react redux if there's data need to conenct to store


const Home = ({tasks, users})=>{
    return(
        <div>
            The average number per user { tasks.length / users.length } 
        </div>
    )
}

const mapState = (state)=>{
    return{
        users: state.users,
        tasks: state.tasks
    }
} 
export default connect(mapState)(Home); //mapState when want to get mapDispatch when want to dispatch