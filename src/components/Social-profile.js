import React from "react";
import defaultImage from './default.png';
import PropTypes from 'prop-types'


const SocialProfile = ({name, tag, location, avatar, stats: {followers, views, likes}}) => {
    return <div class="profile">
  <div class="description">
    <img
     src={avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
         {/* Рендер по умові тренарний оператор */}
        {/* <p> {likes >1000 ? "високий рівень лайків" : "низький рівень лайків" }</p> */}
    </li>
  </ul>
</div>
}

SocialProfile.defaultProps = {
    avatar: defaultImage
 }

SocialProfile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(
    PropTypes.number.isRequired
      
  )

}


export default SocialProfile;