import FriendListItem from 'components/friendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={css["friend-list"]}>
        {friends.map((friend) => (
            <FriendListItem
                key={friend.id} 
                id={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}
            />
        ))
        }
        </ul>
    )
}
export default FriendList;