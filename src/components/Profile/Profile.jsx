import PropTypes from 'prop-types';
import { Section } from '../../common/Section.styled';
import {
  ProfileDescription,
  Avatar,
  Name,
  UserInfo,
  UserList,
  UserLabel,
  UserItem,
  UserValue,
} from './Profile.styled';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <Section>
      <ProfileDescription>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </ProfileDescription>

      <UserList>
        <UserItem>
          <UserLabel>Followers</UserLabel>
          <UserValue>{stats.followers}</UserValue>
        </UserItem>
        <UserItem>
          <UserLabel>Views</UserLabel>
          <UserValue>{stats.views}</UserValue>
        </UserItem>
        <UserItem>
          <UserLabel>Likes</UserLabel>
          <UserValue>{stats.likes}</UserValue>
        </UserItem>
      </UserList>
    </Section>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
