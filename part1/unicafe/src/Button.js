const Button = ({text, click}) => {
    return (
        <button onClick={click}>
            {text}
        </button>
    )
}

export default Button