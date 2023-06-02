import Profile from 'components/profile';
import Statistics from 'components/statistics';
import FriendList from 'components/friendList';
import TransactionHistory from 'components/transactionHistory';
import css from './App.module.css'
import user from 'path/user';
import friends from 'path/friends'
import transactions from 'path/transactions';
import data from 'path/data';
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