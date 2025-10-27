// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.scss";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import useURLPosition from "../hooks/useURLPosition";
import Spinner from "./Spinner";
import Message from "./Message";

function Form() {
    // const navigate = useNavigate();
    const [lat, lng] = useURLPosition(); // console.log(lat, lng);

    const [isLoadingGeo, setIsLoadingGeo] = useState(false);
    const [emoji, setEmoji] = useState("");
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const [geoCodingError, setGeoCodingError] = useState("");

    const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

    useEffect(
        function () {
            async function fetchCities() {
                try {
                    setIsLoadingGeo(true);
                    setGeoCodingError("");
                    const res = await fetch(
                        `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
                    );
                    const data = await res.json(); // console.log(data);
                    if (!data.countryName)
                        throw new Error(
                            `It doesn't seem to be a city ! click somewhere else please.`,
                        );

                    setCityName(data.city);
                    setCountry(data.country);
                    setEmoji(data.countryCode);
                } catch (err) {
                    setGeoCodingError(err.message);
                } finally {
                    setIsLoadingGeo(false);
                }
            }
            fetchCities();
        },
        [lat, lng],
    );

    if (isLoadingGeo) return <Spinner />;
    if (geoCodingError) return <Message message={geoCodingError} />;
    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <div>
                    <input
                        id="cityName"
                        onChange={(e) => setCityName(e.target.value)}
                        value={cityName}
                    />
                    {emoji && (
                        <img
                            src={`https://flagcdn.com/w40/${emoji.toLowerCase()}.png`}
                            alt={country}
                            className={styles.flag}
                        />
                    )}
                </div>
            </div>

            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>
                <input
                    id="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </div>

            <div className={styles.row}>
                <label htmlFor="notes">
                    Notes about your trip to {cityName}
                </label>
                <textarea
                    id="notes"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                />
            </div>

            <div className={styles.buttons}>
                <Button type="primary">Add</Button>
                <BackButton />
            </div>
        </form>
    );
}

export default Form;
