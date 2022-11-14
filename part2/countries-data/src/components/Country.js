export const Country = ({ country }) => {
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>

            <h5>Languages:</h5>
            {Object.values(country.languages)}
            {Object.values(country.flags).forEach((val) => {
                console.log(val)
                return <img src={val} alt='flag'/>
            })}
        </>
    )
}