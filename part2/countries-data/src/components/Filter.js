export const Filter = ({ filterFunc }) => {
    return (
        <div>
            Filter shown with
            <input onChange={filterFunc} />
        </div>
    )
}