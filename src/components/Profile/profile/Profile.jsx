import StatList from '../statList';
import css from './Profile.module.css';
import PropTypes from 'prop-types';
const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <div key={tag} className={css.profile} >
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <StatList stats={stats} />
    </div>
  );
}


Profile.propTypes = {
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};
export default Profile;