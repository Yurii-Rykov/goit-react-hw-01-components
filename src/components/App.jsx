import Profile from '../components/Profile/Profile';
import user from '../database/user';
import Statistics from '../components/Statistics/Statistics';
import data from '../database/data';
import FriendList from '../components/FriendList/FriendList';
import friends from '../database/friends';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import items from '../database/transactions';


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
      <Profile user={user} />
      <Statistics data={data} title={"Upload stats"} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />;

    </div>

  );
};
