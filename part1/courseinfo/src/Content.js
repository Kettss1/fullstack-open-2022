import ContentPart from "./ContentPart";

const Content = (props) => {
    return (
        <div>
            {props.courseParts.map((part) => (
                <ContentPart part={part} />
            ))}
        </div>
    )
}

export default Content;