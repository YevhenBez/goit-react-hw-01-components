import PropTypes from 'prop-types';
import css from './css/statistics.module.css';

const Statistics = (props) => {
    const { title, stats } = props;
    return (
        <section className="statistics">
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map(elementOfStats => (<li key={elementOfStats.id} className={css.item}>
                    <div>
                        <div className={css.statistics__label}><span className="label">{elementOfStats.label}</span></div>
                        <div><span className="percentage">{elementOfStats.percentage}%</span></div>
                    </div>
                </li>))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired
}

export default Statistics;