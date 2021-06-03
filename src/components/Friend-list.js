import React from "react";
import PropTypes from 'prop-types'


   const FriendList = ({ friends }) => (
    <ul class="friend-list">
           {friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} class="item">
                <span class="status">{isOnline ? 'on' : 'off'}</span>
                <img class="avatar" src={avatar} alt="" width="48" />
                <p class="name">{name}</p>
            </li>
        ))}
    </ul>
)


   
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }))
};

export default FriendList