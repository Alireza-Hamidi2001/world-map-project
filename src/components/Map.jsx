import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.scss";
import {
    MapContainer,
    Marker,
    TileLayer,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { Popup } from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { latLng } from "leaflet";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import useURLPosition from "../hooks/useURLPosition";

function Map() {
    const [mapPosition, setMapPosition] = useState([45, 10]);
    const {
        isLoading: isLoadingGeolocation,
        position: positionGeolocation,
        getPosition,
    } = useGeolocation();
    const { cities } = useCities();
    const [mapLat, mapLng] = useURLPosition();
    // const [searchParams] = useSearchParams();
    // const mapLat = +searchParams.get("lat");
    // const mapLng = +searchParams.get("lng");
    // console.log(cities);

    useEffect(
        function () {
            if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
        },
        [mapLat, mapLng],
    );
    useEffect(
        function () {
            if (positionGeolocation)
                setMapPosition([
                    positionGeolocation.lat,
                    positionGeolocation.lng,
                ]);
        },
        [positionGeolocation],
    );
    return (
        <div
            className={styles.mapContainer}
            // onClick={() => { navigate("form")}}
        >
            {!positionGeolocation && (
                <Button
                    type="position"
                    onClick={getPosition}
                >
                    {isLoadingGeolocation ? "Loading..." : "Use your location"}
                </Button>
            )}

            <MapContainer
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) => {
                    if (!city.position) return null;
                    return (
                        <Marker
                            key={city.id}
                            position={[city.position.lat, city.position.lng]}
                        >
                            <Popup>
                                {city.cityName} <br /> capital of {city.country}
                                .
                            </Popup>
                        </Marker>
                    );
                })}

                {/* <ChangeCenter position={[mapLat || 40, mapLng || 0]} /> */}
                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>
        </div>
    );
}

function ChangeCenter({ position }) {
    const map = useMap();
    {
        position && map.setView(position);
    }
    return null;
}
function DetectClick() {
    const navigate = useNavigate();
    useMapEvents({
        click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
}
// console.log(e);

export default Map;
