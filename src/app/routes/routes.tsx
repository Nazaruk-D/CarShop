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
import Shop from "../content/Shop/Shop";
import DemoCar from "../content/Demo/DemoCar/DemoCar";
import Login from "../../features/auth/login/Login";
import Registration from "../../features/auth/registration/Registration";
import DemoSolar from "../content/Demo/DemoSolar/DemoSolar";
import Profile from "../../features/profile/Profile";
import Cybertruck from "../content/CarsModel/Cybertruck/Cybertruck";
import Model3Order from "../content/Ordering/Model 3/Model3Order";
import ModelYOrder from "../content/Ordering/Model Y/ModelYOrder";
import ModelSOrder from "../content/Ordering/Model S/ModelSOrder";

export const routes = {
    mainPage: '/CarShop/',
    modelS: '/CarShop/models',
    model3: '/CarShop/model3',
    modelX: '/CarShop/modelx',
    modelY: '/CarShop/modely',
    solarRoof: '/CarShop/solarroof',
    solarPanels: '/CarShop/solarpanels',
    shop: '/CarShop/shop',
    login: '/CarShop/login',
    profile: '/CarShop/profile',
    cybertruck: '/CarShop/cybertruck',
    registration: '/CarShop/registration',
    drive: '/CarShop/drive',
    consultation: '/CarShop/consultation',
    ordering: '/CarShop/ordering/',
    orderingModel3: '/CarShop/ordering/model3',
    orderingModelY: '/CarShop/ordering/modelY',
    orderingModelS: '/CarShop/ordering/modelS',
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
    {
        path: routes.shop,
        element: <Shop/>
    },
    {
        path: routes.login,
        element: <Login/>
    },
    {
        path: routes.registration,
        element: <Registration/>
    },
    {
        path: routes.profile,
        element: <Profile/>
    },
    {
        path: routes.drive,
        element: <DemoCar/>
    },
    {
        path: routes.consultation,
        element: <DemoSolar/>
    },
    {
        path: routes.cybertruck,
        element: <Cybertruck/>
    },
    {
        path: routes.ordering,
        children: [
            {
                path: "model3",
                element: <Model3Order/>,
            },
            {
                path: "modelY",
                element: <ModelYOrder/>,
            },
            {
                path: "modelS",
                element: <ModelSOrder/>,
            }
        ]
    }
])