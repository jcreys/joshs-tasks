import React, { Component } from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component{
    componentDidMount(){
        this.props.load();
    }
    render(){
        return (
            <Nav />
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