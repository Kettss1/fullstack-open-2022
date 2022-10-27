const Total = (props) => {
    const totalValue = props.courseParts.reduce((acc, value) => {
        return acc + value.exercises;
    }, 0)

    return (
        <>
            <p>{totalValue}</p>
        </>
    )
}

export default Total;