import React, {useEffect, useState} from 'react';
import s from "./Profile.module.scss"
import Header from "../../app/header/Header";
import MainBlock from "./MainBlock/MainBlock";
import {useAppDispatch, useAppSelector} from "../../app/store/store";
import {routes} from "../../app/routes/routes";
import {useNavigate} from "react-router-dom";
import {fetchProfileTC} from "./profile-reducer";
import Modal from "./Modal/Modal";
import {useModal} from "./Modal/useModal";


const Profile = () => {
    const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState(true)



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
            <MainBlock setModalActive={setModalActive}/>
            {/*{editNameModal && <Modal setModalActive={setModalActive}/>}*/}
        </div>
    );
};

export default Profile;