interface ErrorFallbackPropsInterface {
    weather: object,
    children: any
}

export default function ErrorFallback({weather, children}: ErrorFallbackPropsInterface) {
    if (Object.keys(weather).length === 0 || weather.cod !== 200) {
        return (
            <h1 className='text-light col-md-8 px-3 text-center d-flex align-items-center justify-content-center pt-3'>
                Whoops, Je n'ai pas trouvé ce que tu cherchais 🤷
            </h1>
        )
    }

    return children
}
