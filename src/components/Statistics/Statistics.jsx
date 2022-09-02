import PropTypes from 'prop-types';
import { Section } from '../../common/Section.styled';
import { Header, StatList, StatListItem, StatLabel } from './Statistics.styled';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <Section>
      {title && <Header className="title">{title}</Header>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <StatLabel>{label}</StatLabel>
            <span className="percentage">{percentage}%</span>
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
