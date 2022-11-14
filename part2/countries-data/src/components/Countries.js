export const Countries = ({ countriesList }) => {
    return (
        <>
            {countriesList.map((country) => (
                <p key={country.name.common}>{country.name.common}</p>
            ))}
        </>
    )
}