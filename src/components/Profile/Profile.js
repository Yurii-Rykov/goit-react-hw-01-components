import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          //   src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          src={user.avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className={s.name}>{user.username}</p>
        <p className={s.tag}>@{user.tag}</p>
        <p className={s.tag}>{user.location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.list}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{user.stats.followers}</span>
        </li>
        <li className={`${s.list} ${s.listCenter}`}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{user.stats.views}</span>
        </li>
        <li className={s.list}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
 
Profile.propTypes = {
  user:  PropTypes.shape({
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
})
}

export default Profile;