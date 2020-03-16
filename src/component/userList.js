import React, {Component} from 'react';
import User from "./user";

import {connect} from "react-redux";

class UserList extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            lastname: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeUser = this.removeUser.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.dispatch({
            type: "ADD_USER",
            user: this.state
        })
        this.setState({
            name: "",
            lastname: "",
            email: ""
        })
        e.target.reset();
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    removeUser(id){
        this.props.dispatch({
            type: "REMOVE_USER",
            id
        })
    }

    render(){
        let users =this.props.users.map((user, index) =>(
            <User
                removeUser={this.removeUser.bind(this, user.id)}
                user={user}
                key={index}
            />
        ));
        return(
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                    />
                    <button>Add User!</button>
                </form>
                <ul>{users}</ul>
            </div>
        )
    }

}

function mapStateProps(reduxState){
    return{
        users: reduxState.users
    }
}

export default connect(mapStateProps)(UserList)