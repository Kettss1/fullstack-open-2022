import ContentPart from "./ContentPart";

const Content = (props) => {
    return (
        <div>
            {props.course.courseParts.map((part, index) => (
                <ContentPart key={index} part={part} />
            ))}
        </div>
    )
}

export default Content;