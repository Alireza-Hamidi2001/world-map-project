/* eslint-env node */

import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    // مسیر درست به فایل cities.json
    const filePath = path.join(process.cwd(), "data", "cities.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (req.method === "GET") {
        // 📍 همه شهرها
        res.status(200).json(data.cities);
    } else if (req.method === "POST") {
        // 📍 افزودن شهر جدید
        const newCity = {
            ...req.body,
            id: Date.now(),
        };

        data.cities.push(newCity);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        res.status(201).json(newCity);
    } else if (req.method === "DELETE") {
        // 📍 حذف شهر
        const { id } = req.query;
        data.cities = data.cities.filter((city) => String(city.id) !== id);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        res.status(200).json({ message: "City deleted successfully" });
    } else {
        res.setHeader("Allow", ["GET", "POST", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
