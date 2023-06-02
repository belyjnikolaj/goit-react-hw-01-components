
import Stats from 'components/stats';

import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <Stats stats={stats} />
        </section>
    );
}
export default Statistics;
