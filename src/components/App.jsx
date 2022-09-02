import { GlobalStyle } from './GlobalStyle';
import Profile from './Profile/Profile';
import user from '../database/user.json';
import Statistics from './Statistics/Statistics';
import data from '../database/data.json';
import FriendsList from './FriendList/FriendList';
import friends from '../database/friends.json';
import TransactionHistory from './Transactions/Transactions';
import transactions from '../database/transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
