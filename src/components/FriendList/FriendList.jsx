import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import { Section } from '../../common/Section.styled';

export default function FriendsList(props) {
  //   const { avatar, name, isOnline, id } = props;
  const { friends } = props;
  return (
    <Section>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </Section>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
