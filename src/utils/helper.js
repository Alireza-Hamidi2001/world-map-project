export function emojiToCountryCode(emoji) {
    if (!emoji || typeof emoji !== "string") return "";
    const codePoints = [...emoji].map((char) => char.codePointAt(0) - 127397);
    return String.fromCharCode(...codePoints);
}

export function countryCodeToFlag(countryCode) {
    if (!countryCode) return "";
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

export const formatDate = (date) => {
    if (!date) return "Unknown date";
    const parsed = new Date(date);
    if (isNaN(parsed)) return "Unknown date";
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(parsed);
};
