import {createBrowserRouter} from "react-router-dom";
import MainPage from "../content/MainPage/MainPage";
import React from "react";
import ErrorPage from "../../common/components/ErrorPage/ErrorPage";
import ModelS from "../content/CarsModel/Model S/ModelS";

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
        element: <div>model 3</div>
    },
    {
        path: routes.modelX,
        element: <div>model X</div>
    },
    {
        path: routes.modelY,
        element: <div>model y</div>
    },
    {
        path: routes.solarRoof,
        element: <div>Solar Roof</div>
    },
    {
        path: routes.solarPanels,
        element: <div>Solar Panels</div>
    },
])