import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./store/store";
import {initializeAppTC} from "./app-reducer";
import {router} from "./routes/routes";
import {RouterProvider, useLocation} from "react-router-dom";
import Preloader from "../common/components/Preloader/Preloader";
import UpArrow from "../common/components/UpArrow/UpArrow";

const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(s => s.app.initialized)

    useEffect(() => {
        window.scrollTo(0, 0);
    } );

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    if (!isInitialized){
        return <Preloader/>
    }

    return (
        <>
            <RouterProvider router={router}/>
            <UpArrow/>
        </>
    );
};

export default App;