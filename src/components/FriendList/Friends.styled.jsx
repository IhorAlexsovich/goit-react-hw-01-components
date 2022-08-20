import styled from 'styled-components';

export const FriendStatus = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: ${props => props.theme.spacing(4)};
`;

export const Online = styled(FriendStatus)`
  background-color: ${props => props.theme.colors.green};
`;

export const Offline = styled(FriendStatus)`
  background-color: ${props => props.theme.colors.red};
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
   &:not(:last-child) {
    margin-bottom: 15px;
`;

export const FriendAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${props => props.theme.spacing(4)};
`;
