import styled from 'styled-components';

export const Header = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: calc(100% / 5);
  font-size: 12px;

  padding: ${props => props.theme.spacing(2)} 0;
  border: 1px solid black;
  background-color: ${randomColor};
`;

export const StatLabel = styled.span`
  margin-bottom: 8px;
`;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
