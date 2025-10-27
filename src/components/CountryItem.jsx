import ReactCountryFlag from "react-country-flag";
import styles from "./CountryItem.module.scss";
import { emojiToCountryCode } from "../utils/helper";

function CountryItem({ country }) {
    return (
        <li className={styles.countryItem}>
            <span>
                <ReactCountryFlag
                    countryCode={emojiToCountryCode(country.emoji)}
                    svg
                />
            </span>
            <span>{country.country}</span>
        </li>
    );
}

export default CountryItem;
