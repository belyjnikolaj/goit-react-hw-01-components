import FriendListItem from '../friendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            <FriendListItem friends={friends} />
        </ul>
    )
}
export default FriendList;