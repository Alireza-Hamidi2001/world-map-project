import styles from "./CityItem.module.scss";
import { emojiToCountryCode, formatDate } from "../utils/helper";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

function CityItem({ city }) {
    const { currentCity } = useCities();
    const { cityName, emoji, date, id, position } = city;
    // console.log("position: ", position);
    return (
        <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
            <li
                className={`${styles.cityItem} ${
                    id === currentCity.id && styles["cityItem--active"]
                } `}
            >
                <span className={styles.emoji}>
                    <ReactCountryFlag
                        countryCode={emojiToCountryCode(emoji)}
                        svg
                        title={cityName}
                    />
                </span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.time}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </li>
        </Link>
    );
}

export default CityItem;
