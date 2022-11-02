import ContentPart from "./ContentPart";

const Content = (props) => {
    return (
        <div>
            {props.course.courseParts.map((part) => (
                <ContentPart key={part.id} part={part} />
            ))}
        </div>
    )
}

export default Content;