const Statistics = (props) => {
    const { title, stats } = props;
    return (
        <section class="statistics">
            {title && <h2 class="title">Upload stats</h2>}

            <ul class="stat-list">
                {stats.map(elementOfStats => ( <li key={elementOfStats.id} class="item">
                    <div>
                        <div class="statistics__label"><span class="label">{elementOfStats.label}</span></div>
                        <div><span class="percentage">{elementOfStats.percentage}%</span></div>
                    </div>
                </li>))}
            </ul>
        </section>
    )
}

export default Statistics;