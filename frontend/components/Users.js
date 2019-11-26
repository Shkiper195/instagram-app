import React, {Component} from 'react';
import InstaService from '../services/instaServices';
import ErrorMessage from './Error';
import User from './User';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        users: []
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {photo, name, altname, _id} = item;

            return (
                <User key={_id} src={photo}  
                name={name}
                alt={altname}
                min/>
            )
        })
    }
    
    render () {
        const {error, users} = this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(users);
        return (
            <div className="right">
                <User src="https://www.zastavki.com/pictures/originals/2019Men___Male_Celebrity_Smiling_man__actor_Hugh_Jackman_in_a_suit_on_a_gray_background_135378_.jpg" 
                    alt="man" 
                    name="Hugh"/>
                <div className="users__block">
                    {items}
                </div>
            </div>
        );
    }
}