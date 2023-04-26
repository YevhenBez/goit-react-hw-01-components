const Statistics = (props) => {
    const { title, stats } = props;
    return (
        <section className="statistics">
            {title && <h2 className="title">Upload stats</h2>}

            <ul className="stat-list">
                {stats.map(elementOfStats => ( <li key={elementOfStats.id} className="item">
                    <div>
                        <div className="statistics__label"><span className="label">{elementOfStats.label}</span></div>
                        <div><span className="percentage">{elementOfStats.percentage}%</span></div>
                    </div>
                </li>))}
            </ul>
        </section>
    )
}

export default Statistics;