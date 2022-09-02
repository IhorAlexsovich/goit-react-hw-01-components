import { GlobalStyle } from './GlobalStyle';
import Profile from './Profile/Profile';
import user from '../DataBase/user.json';
import Statistics from './Statistics/Statistics';
import data from '../DataBase/data.json';
import FriendsList from './FriendList/FriendList';
import friends from '../DataBase/friends.json';
import TransactionHistory from './Transactions/Transactions';
import transactions from '../DataBase/transactions.json';

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
