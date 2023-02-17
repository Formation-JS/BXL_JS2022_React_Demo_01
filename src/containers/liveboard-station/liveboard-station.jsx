import { useState } from "react";
import StationRequestAjax from "../../components/station-request-ajax/station-request-ajax";
import StationSearchForm from "../../components/station-search-form/station-search-form";



const LiveboardStation = () => {

    const [stationName, setStationName] = useState(null);

    const handleNewStation = (station) => {
        setStationName(station);
    }

    return (
        <>
            <StationSearchForm onQuery={handleNewStation} />
            {stationName && (
                <StationRequestAjax station={stationName} />
            )}
        </>
    )

}


export default LiveboardStation;