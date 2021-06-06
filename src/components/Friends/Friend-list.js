import React from "react";
import PropTypes from 'prop-types'
import FriendsStyle from './FriendsList.module.css'


const FriendList = ({ friends }) => (
    <ul className={FriendsStyle.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (

            < li key={id} className={FriendsStyle.friendItem} >
                <span className={isOnline ? FriendsStyle.online : FriendsStyle.ofline}></span>
                <img class="avatar" src={avatar} alt="" width="58" />
                <p className={FriendsStyle.friendName}>{name}</p>
            </ li>

        ))}
    </ul >
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