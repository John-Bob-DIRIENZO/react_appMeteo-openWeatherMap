interface WeatherPropsInterface {
    weather: object
}

export default function Weather({weather}: WeatherPropsInterface) {
    return (
        <div className="col-md-8 text-light d-flex align-items-center justify-content-center flex-column pt-3">
            <p>Il fait {weather.main?.temp ?? '-noValue-'}°C avec {weather.main?.humidity ?? '-noValue-'}% d'humidité</p>
            <p>La couverture nuageuse est de {weather.clouds?.all ?? '-noValue-'}%</p>
            <p>
                Le temps est de type : {weather.weather?.[0].description}
                <img src={
                    weather.weather?.[0].icon ?
                    `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png` : ''
                } alt='weather icon'/>
            </p>
        </div>
    )
}
