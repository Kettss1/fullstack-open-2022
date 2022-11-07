export const Form = ({ submitFunc, nameValue, setNameFunc, numberValue, setNumberFunc }) => {
    return (
        <>
            <h2>Add a New</h2>
            <form onSubmit={submitFunc}>
                <div>
                name: <input
                        value={nameValue}
                        onChange={setNameFunc}
                        />
                </div>
                <div>
                number: <input type={'number'} value={numberValue} onChange={setNumberFunc} />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

