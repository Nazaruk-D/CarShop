import React from 'react';
import s from "./Profile.module.scss"
import Header from "../../app/header/Header";
import MainBlock from "./MainBlock/MainBlock";

const Profile = () => {

    return (
        <div className={s.mainPage}>
            <Header/>
            <MainBlock/>
        </div>
    );
};

export default Profile;