import PropTypes from 'prop-types';
import { Online, Offline, FriendItem, FriendAvatar } from './Friends.styled';

export default function FriendCard({ avatar, name, isOnline }) {
  return (
    <FriendItem>
      {isOnline ? <Online /> : <Offline />}
      {/* <span className="status">{isOnline}</span> */}
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
