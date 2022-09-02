import styled from 'styled-components';

export const Section = styled.section`
  width: 350px;
  height: auto;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  box-shadow: ${props => props.theme.colors.boxShadow};
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
