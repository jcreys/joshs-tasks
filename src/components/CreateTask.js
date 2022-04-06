import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class CreateTask extends Component {
    constructor(){
        super();
        this.state = {
            taskName: '',
            userId: ''
            
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(ev){
        ev.preventDefault();
        this.props.create(this.state.taskName, this.state.userId);
    }
    render() {
        const {taskName, userId} = this.state;
        const { users } = this.props;
        console.log(users);
        return (
            <form onSubmit={ this.onSubmit }>
                <input 
                    onChange={ ev => this.setState({taskName: ev.target.value})}
                    placeholder='enter task name' 
                    value={taskName}/>
                <select
                    value= {userId }
                    onChange = { ev => this.setState({ userId: ev.target.value})}
                >
                    <option value=''>-- choose a user</option>
                    {
                        users.map( user => {
                            return (
                                <option value={user.id} key={ user.id }>{ user.firstName }</option>
                            );
                        })
                    }
                </select>
                <button disabled={ !taskName || !userId }>Create</button>
            </form>
        )
    }


}

const mapDispatchToProps = (dispatch, otherProps)=> {
    return {
        create: async(name, userId)=> {
            const response = await axios.post('/api/tasks', { name, userId});
            dispatch({type: 'CREATE_TASK', task: response.data});
            otherProps.history.push('/tasks');
            console.log(name);
        }
    }
}
export default connect(state=>state, mapDispatchToProps)(CreateTask);