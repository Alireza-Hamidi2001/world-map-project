import { BrowserRouter, HashRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

import "./index.css";
import "../sass/main.scss";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
    return (
        <CitiesProvider>
            <HashRouter>
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
                            element={
                                <Navigate
                                    replace
                                    to="cities"
                                />
                            }
                        />
                        <Route
                            path="cities"
                            element={<CityList />}
                        />
                        <Route
                            path="cities/:id"
                            element={<City />}
                        />
                        <Route
                            path="countries"
                            element={<CountryList />}
                        />
                        <Route
                            path="form"
                            element={<Form />}
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
            </HashRouter>
        </CitiesProvider>
    );
}

export default App;
