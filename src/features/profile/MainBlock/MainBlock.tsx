import React, {useState} from 'react';
import s from "./MainBlock.module.scss"
import {useAppDispatch} from "../../../app/store/store";
import {NavLink, useNavigate} from "react-router-dom";
import {logoutTC} from "../../auth/auth-reducer";
import {routes} from "../../../app/routes/routes";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import Orders from "./Orders/Orders";

const MainBlock = () => {
    const [isActive, setIsActive] = useState(true)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClickHandler = () => {
        dispatch(logoutTC())
        navigate(routes.login)
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.navBlock}>
                <div className={s.navContainer}>
                    <div className={s.buttonBlock}>
                        <div className={s.icon}></div>
                        <span style={isActive ? {color: 'black'} : {}} className={s.navButton} onClick={()=>{setIsActive(true)}}>Profile Settings</span>
                    </div>
                    <div className={s.buttonBlock}>
                        <div className={s.icon}></div>
                        <span style={isActive ? {} : {color: 'black'}} className={s.navButton} onClick={()=>{setIsActive(false)}}>Orders</span>
                    </div>
                    <div className={s.buttonBlock}>
                        <div className={s.icon}></div>
                        <span onClick={onClickHandler} className={s.navButton}>Sign Out</span>
                    </div>
                </div>
            </div>
            <div className={s.contentContainer}>
                {isActive
                ? <ProfileSettings/>
                : <Orders/>
                }
            </div>
        </div>
    );
};

export default MainBlock;