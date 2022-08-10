import Container from './Container/Container';
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
    <Container >
      
      <Profile user={user} />
      <Statistics data={data} title={"Upload stats"} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />;

    </Container>

  );
};
 