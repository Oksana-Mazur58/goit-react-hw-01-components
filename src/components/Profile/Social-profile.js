import React from "react";
//import defaultImage from './default.png';
import PropTypes from 'prop-types'
import profileStyle from './Profile.module.css'


const SocialProfile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => {
  return <div className={profileStyle.profileContainer}>
    <div class="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={profileStyle.profileImg}
      />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul className={profileStyle.profileList}>
      <li className={profileStyle.profileItem}>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li className={profileStyle.profileItem}>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li className={profileStyle.profileItem}>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
        {/* Рендер по умові тренарний оператор */}
        {/* <p> {likes >1000 ? "високий рівень лайків" : "низький рівень лайків" }</p> */}
      </li>
    </ul>
  </div >
}

// SocialProfile.defaultProps = {
//   avatar: defaultImage
// }

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