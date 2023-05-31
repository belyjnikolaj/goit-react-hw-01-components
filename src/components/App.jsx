import Profile from './Profile/profile';
import Statistics from './Statistics/statistics';
import FriendList from './FriendList/friendList';
import TransactionHistory from './TransactionHistory/transactionHistory';
import css from './App.module.css'
import user from 'path/to/user.json';
import friends from 'path/to/friends'
import transactions from 'path/to/transactions';
import data from 'path/to/data.json';
export const App = () => {
  return (
    <div className={css.app_container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};