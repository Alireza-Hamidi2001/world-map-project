import styles from "./CountryList.module.scss";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
    const { cities, isLoading } = useCities();
    if (isLoading) return <Spinner />;
    if (!cities.length) return <Message message="There is no country yet." />;

    const countries = cities.reduce((acc, curValue, curIndex, array) => {
        if (!acc.map((el) => el.country).includes(curValue.country))
            return [
                ...acc,
                { country: curValue.country, emoji: curValue.emoji },
            ];
        else {
            return acc;
        } // Rec Mono Casual
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem
                    country={country}
                    key={country.country}
                />
            ))}
        </ul>
    );
}

export default CountryList;
