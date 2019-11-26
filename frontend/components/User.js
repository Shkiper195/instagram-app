import React from 'react';

const User = (props) => {
    const {min, src, alt, name} = props;

    return (
        <a href="#" className={min ? "user min" : "user"}>
            <img src={src} alt={alt} className="user__img"></img>
            <div className="user__name">{name}</div>
        </a>
    )
}

export default User;