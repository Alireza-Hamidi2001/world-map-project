const citiesData = {
    cities: [
        {
            cityName: "Lisbon",
            country: "Portugal",
            emoji: "🇵🇹",
            date: "2027-10-31T15:59:59.138Z",
            notes: "My favorite city so far!",
            position: {
                lat: 38.727881642324164,
                lng: -9.140900099907554,
            },
            id: 73930385,
        },
        {
            cityName: "Madrid",
            country: "Spain",
            emoji: "🇪🇸",
            date: "2027-07-15T08:22:53.976Z",
            notes: "",
            position: {
                lat: 40.46635901755316,
                lng: -3.7133789062500004,
            },
            id: 17806751,
        },
        {
            cityName: "Berlin",
            country: "Germany",
            emoji: "🇩🇪",
            date: "2027-02-12T09:24:11.863Z",
            notes: "Amazing 😃",
            position: {
                lat: 52.53586782505711,
                lng: 13.376933665713324,
            },
            id: 98443197,
        },
    ],
};

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    res.status(200).json(citiesData);
}
