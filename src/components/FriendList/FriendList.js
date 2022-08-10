import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          {friend.isOnline ? (
            <span className={s.status} style={{ backgroundColor: 'green' }}>
              {friend.isOnline}
            </span>
          ) : (
            <span className={s.status} style={{ backgroundColor: 'red' }}>
              {friend.isOnline}
            </span>
          )}
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number, 
    })
  ),
};

// Statistics.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       label: PropTypes.string,
//       percentage: PropTypes.number,
//     })
//   ),
//   title: PropTypes.string,
// };
