import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Users from './Users';
import Tasks from './Tasks';
import UserTasks from './UserTasks';

class App extends Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        return (
            <div>
                <Nav />
                <Route path='/' exact component={ Home } />
                <Route path='/users' exact component={ Users} />
                <Route path='/users/:id' component={ UserTasks} />
                <Route path='/tasks'  component={ Tasks } />
            </div>

        );
    }
}

const mapDispatch = (dispatch)=> {
    return {
        load: async()=> {
            const response1 = await axios.get('/api/tasks');
            dispatch({type: 'SET_TASKS', tasks: response1.data});
            const response2 = await axios.get('/api/users');
            dispatch({type: 'SET_USERS', users: response2.data});
            console.log('load data');
        }
    }
}
export default connect(null, mapDispatch)(App);