import styled from 'styled-components';

export const Table = styled.table`
  font-size: 10px;
  width: 100%;
`;

export const TableHeader = styled.thead`
  background-color: rgba(233, 158, 81, 0.7);
`;

export const TableInfo = styled.td`
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: rgba(101, 237, 9, 0.7);
  }
`;
