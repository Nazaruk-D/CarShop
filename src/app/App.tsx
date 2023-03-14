import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./store/store";
import {initializeAppTC} from "./app-reducer";
import {router} from "./routes/routes";
import {RouterProvider} from "react-router-dom";
import Preloader from "../common/components/Preloader/Preloader";

const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(s => s.app.initialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch])

    // if (!isInitialized){
    if (true){
        return <Preloader/>
    }

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default App;