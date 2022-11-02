import Button from "./Button"

const Anecdote = ({ title, anecdote, votes, hasButtons, nextFunc, voteFunc }) => {
    return (
        <div className="wrapper">
            <p>{title}</p>
            <p>{anecdote}</p>
            <p>has {votes} vote(s)</p>
            {hasButtons && (
                <div>
                    <Button text={"Next Anecdote"} click={nextFunc} />
                    <Button text={"Vote"} click={voteFunc} />
               </div>
            )}
        </div>
    )
}

export default Anecdote