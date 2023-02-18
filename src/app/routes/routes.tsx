import {createBrowserRouter} from "react-router-dom";
import MainPage from "../content/MainPage/MainPage";
import React from "react";
import ErrorPage from "../../common/components/ErrorPage/ErrorPage";
import ModelS from "../content/CarsModel/Model S/ModelS";
import ModelY from "../content/CarsModel/Model Y/ModelY";
import Model3 from "../content/CarsModel/Model 3/Model3";
import ModelX from "../content/CarsModel/Model X/ModelX";
import SolarPanels from "../content/CarsModel/Solar Panels/SolarPanels";
import SolarRoof from "../content/CarsModel/Solar Roof/SolarRoof";

export const routes = {
    mainPage: '/CarShop/',
    modelS: '/CarShop/models',
    model3: '/CarShop/model3',
    modelX: '/CarShop/modelx',
    modelY: '/CarShop/modely',
    solarRoof: '/CarShop/solarroof',
    solarPanels: '/CarShop/solarpanels',
}

export const router = createBrowserRouter([
    {
        path: routes.mainPage,
        element: <MainPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: routes.modelS,
        element: <ModelS/>
    },
    {
        path: routes.model3,
        element: <Model3/>
    },
    {
        path: routes.modelX,
        element: <ModelX/>
    },
    {
        path: routes.modelY,
        element: <ModelY/>
    },
    {
        path: routes.solarRoof,
        element: <SolarRoof/>
    },
    {
        path: routes.solarPanels,
        element: <SolarPanels/>
    },
])