import {
    Children,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
// const BASE_URL = "http://localhost:8000";
const BASE_URL = "https://cities-api-six.vercel.app";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(function () {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
                console.log("cities: ", data);
            } catch {
                alert("an error to fetch cities");
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);

    async function getCities(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
            console.log("current city: ", data);
        } catch {
            alert("an error for current city");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                getCities,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error(
            "Cities context are use from outside of CitiesProvider",
        );
    return context;
}

export { CitiesProvider, useCities };
