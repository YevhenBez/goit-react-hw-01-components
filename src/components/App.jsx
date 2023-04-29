import Profile from './profile/Profile';
import user from '../path/to/user.json';
import Statistics from './statistics/Statistics';
import data from '../path/to/data.json';
import FriendList from './friendList/FriendList';
import friends from '../path/to/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from '../path/to/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
