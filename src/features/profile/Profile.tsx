import React, {useEffect} from 'react';
import s from "./Profile.module.scss"
import Header from "../../app/header/Header";
import {useAppDispatch, useAppSelector} from "../../app/store/store";
import {routes} from "../../app/routes/routes";
import {useNavigate} from "react-router-dom";
import {fetchProfileTC} from "./profile-reducer";
import MainBlock from "./MainBlock/MainBlock";


const Profile = () => {
    const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate(routes.login)
        }
        else {
            dispatch(fetchProfileTC())
        }
    }, [isLoggedIn])

    return (
        <div className={s.mainPage}>
            <Header/>
            <MainBlock/>
        </div>
    );
};

export default Profile;