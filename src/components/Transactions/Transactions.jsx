import PropTypes from 'prop-types';
import { Section } from '../common/Section.styled';
import { Table, TableInfo, TableHeader, TableRow } from './Transactions.styled';

export default function TransactionHistory(props) {
  const { items } = props;
  return (
    <Section>
      <Table>
        <TableHeader>
          <TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TableRow>
        </TableHeader>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableInfo>{type}</TableInfo>
              <TableInfo>{amount}</TableInfo>
              <TableInfo>{currency}</TableInfo>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Section>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
