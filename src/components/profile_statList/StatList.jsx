import PropTypes from 'prop-types';
import css from './StatList.module.css';
const StatList = ({ stats }) => {
  const keys = Object.keys(stats);
  return (
    <ul className={css.stats}>
      {keys.map(key => (
        <li className={css.item} key={key}>
          <span className={css.label}>{key}</span>
          <span className={css.quantity}>{stats[key].toLocaleString()}</span>
        </li>
      ))}
      </ul>
    ); 
}
StatList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

export default StatList;