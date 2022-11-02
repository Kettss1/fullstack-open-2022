import StatisticLine from "./StatisticLine"

const Statistics = ({ goodValue, neutralValue, badValue, allValue, averageValue, percentageValue }) => {
    return (
        <div>
            <h1>Statistics</h1>
            {allValue > 0 ? (
                <>
                    <StatisticLine title="good" value={goodValue}/>
                    <StatisticLine title="neutral" value={neutralValue}/>
                    <StatisticLine title="bad" value={badValue}/>
                    <StatisticLine title="all" value={allValue}/>
                    <StatisticLine title="average" value={averageValue}/>
                    <StatisticLine title="positive percentage" value={`${percentageValue}%`} />
                </>
            ) : (
                <p>No feedbacks given</p>
            )}
        </div>
    )
}

export default Statistics