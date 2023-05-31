import PropTypes from 'prop-types';
import css from './Stats.module.css';
import { getRandomHexColor } from "./randomColor"
const Stats = ({ stats }) => {
    return (
        <ul className={css.statList}>
            {stats.map(dataItem => {
                const { id, label, percentage } = dataItem;
                return (
                    <li className={css.item} style={{backgroundColor: getRandomHexColor()}} key={id}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                )
            })}
        </ul>
    ) 
}
Stats.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
};
export default Stats;