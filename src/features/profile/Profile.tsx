import React from 'react';
import s from "./Profile.module.scss"
import {useAppDispatch} from "../../app/store/store";
import {logoutTC} from "../auth/auth-reducer";
import {useNavigate} from "react-router-dom";
import {routes} from "../../app/routes/routes";

const Profile = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClickHandler = () => {
        dispatch(logoutTC())
        navigate(routes.login)
    }

    return (
        <div>
            test
            <button onClick={onClickHandler}>logout</button>
        </div>
    );
};

export default Profile;