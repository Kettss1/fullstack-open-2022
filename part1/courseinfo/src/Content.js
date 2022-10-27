const Content = (props) => {
    return (
        <>
            {props.courseParts.map((part) => (
                <p>{part.title} {part.exercises}</p>
            ))}
        </>
    )
}

export default Content;