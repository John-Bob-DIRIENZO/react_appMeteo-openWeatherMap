import {WeatherStackApiKey} from "../Keys/WeatherStackApiKey";

export default function useGetWeatherFrom() {
    return async (location: string) =>
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherStackApiKey}&units=metric&lang=fr`)
}
