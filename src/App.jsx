import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

import "./index.css";
import "../sass/main.scss";
import CityList from "./components/CityList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="app"
                    element={<AppLayout />}
                >
                    <Route
                        index
                        element={<CityList />}
                    />
                    <Route
                        path="cities"
                        element={<CityList />}
                    />
                    <Route
                        path="countries"
                        element={<p>country list</p>}
                    />
                    <Route
                        path="form"
                        element={<p>form section</p>}
                    />
                </Route>
                <Route
                    path="pricing"
                    element={<Pricing />}
                />
                <Route
                    path="product"
                    element={<Product />}
                />
                <Route
                    path="login"
                    element={<Login />}
                />
                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
