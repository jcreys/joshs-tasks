import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({users, tasks})=> {

    return(
        <nav>
            <Link to='/tasks'>Tasks ({tasks.length})</Link>
            <Link to='/users'>Users({users.length})</Link>
            <Link to='/'>Home</Link>

        </nav>
    );
    
};
const mapState =(state)=>{
    console.log(state);
    return {

        tasks: state.tasks,
        users: state.users
    };
}
export default connect(mapState)(Nav);
