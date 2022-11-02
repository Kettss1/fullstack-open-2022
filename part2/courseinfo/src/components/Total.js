const Total = (props) => {
    const totalValue = props.course.courseParts.reduce((acc, value) => {
        return acc + value.exercises;
    }, 0)

    return (
        <>
            <p>Total of {totalValue} courses</p>
        </>
    )
}

export default Total;