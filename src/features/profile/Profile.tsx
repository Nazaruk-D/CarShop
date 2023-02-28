import React, {useEffect} from 'react';
import s from "./Profile.module.scss"
import Header from "../../app/header/Header";
import MainBlock from "./MainBlock/MainBlock";
import {useAppSelector} from "../../app/store/store";
import {routes} from "../../app/routes/routes";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn) {
            navigate(routes.login)
        }
    },[isLoggedIn])

    return (
        <div className={s.mainPage}>
            <Header/>
            <MainBlock/>
        </div>
    );
};

export default Profile;