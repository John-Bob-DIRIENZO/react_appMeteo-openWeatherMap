import {useDocumentTitle} from "./Hook/useDocumentTitle";
import {useEffect, useState} from "react";
import useGetWeatherFrom from "./Hook/useGetWeatherFrom";
import Form from "./Component/Form";
import Weather from "./Component/Weather";
import ErrorFallback from "./Component/ErrorFallback";

export default function App() {
    const [documentTitle, setDocumentTitle] = useDocumentTitle('Météo');
    const [askedLocation, setAskedLocation] = useState<string>('Paris');
    const [weather, setWeather] = useState<object>({});
    const getWeatherFrom = useGetWeatherFrom();

    useEffect(() => {
        // @ts-ignore
        setDocumentTitle(`La météo de ${askedLocation}`);
        getWeatherFrom(askedLocation)
            .then(data => data.json()) // Parse le body de ma promesse
            .then(data => {
                setWeather(data)
                console.log(data)
            })
    }, [askedLocation])

    return (
        <div className='py-5 bg-dark' style={{height: '100vh'}}>
            <h1 className='text-center text-light'>Votre météo à {askedLocation}</h1>
            <div className="row gx-2 m-5">
                <Form setAskedLocation={setAskedLocation}/>
                <ErrorFallback weather={weather}>
                    <Weather weather={weather}/>
                </ErrorFallback>
            </div>
        </div>
    )
}
