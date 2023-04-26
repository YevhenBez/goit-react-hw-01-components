import Profile from './profile/Profile';
import user from '../components/path/to/user.json';
import Statistics from './statistics/Statistics';
import data from '../components/path/to/data.json';
import FriendList from './friendList/FriendList';
import friends from '../components/path/to/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from '../components/path/to/transactions.json';

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
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
