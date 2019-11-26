import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="profile">
            <User src="https://www.zastavki.com/pictures/originals/2019Men___Male_Celebrity_Smiling_man__actor_Hugh_Jackman_in_a_suit_on_a_gray_background_135378_.jpg" 
                alt="man" 
                name="Hugh"/>
            <Palette />
        </div>
    )
}

export default Profile;