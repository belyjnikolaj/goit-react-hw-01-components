import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';
const FriendListItem = ({ id, isOnline, avatar, name }) => {    // const {  } = friend;
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
        }

FriendListItem.propTypes = {
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
};

export default FriendListItem;