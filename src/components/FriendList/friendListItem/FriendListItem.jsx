import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';
const FriendListItem = ({ friends }) => {
    return (        
        friends.map(friend => {
            const { id, isOnline, avatar, name } = friend
            return (                
                <li className={css.item} key={id}>
                    <span
                        className={clsx(css.status, {
                            [css.red]: !isOnline,
                            [css.green]: isOnline,
                        })}
                    >
                        {isOnline}
                    </span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            )
        })
    )
} 
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;