import axios from "axios";
import { useEffect, useState } from "react";


const StationRequestAjax = ({station}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // https://api.irail.be/liveboard/?station=delta&lang=fr&format=json
        axios.get('https://api.irail.be/liveboard/', {
            params: {
                lang: 'fr',
                format: 'json',
                station
            }
        }).then(response => {
            const departure = response.data.departures.departure[0];
            setData({
                name: departure.stationinfo.name,
                time: new Date(departure.time * 1000),
                delay: departure.delay
            })
        }).catch(response => {
            setError(response.message)
        }) 

        return () => {
            setData(null);
            setError(null);
        }

    }, [station]);

    return (
        <div>
            <p>Resultat : </p>
            {(!data && !error) ? (
                <p>Loading...</p>
            ) : (data) ? (
                <p>{data.name} {data.time.toLocaleTimeString()} {data.delay}</p>
            ) : (
                <p>{error}</p>
            )}
        </div>
    );
};

export default StationRequestAjax;