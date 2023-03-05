import React, {useState} from 'react';
import s from "./MainBlock.module.scss"
import {useAppDispatch} from "../../../app/store/store";
import {useNavigate} from "react-router-dom";
import {logoutTC} from "../../auth/auth-reducer";
import {routes} from "../../../app/routes/routes";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import Orders from "./Orders/Orders";
import {FiArchive, FiLogOut, FiUser} from "react-icons/fi";


const MainBlock = () => {
    const [isActive, setIsActive] = useState(true)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const greyColor = isActive ? {} : {color: 'black'};
    const blackColor = isActive ? {color: 'black'} : {};
    const activeIcon = isActive ? {backgroundColor: 'rgba(1,1,1,0.05)', color: 'black'} : {}
    const disableIcon = isActive ? {} : {backgroundColor: 'rgba(1,1,1,0.05)', color: 'black'}

    const onClickHandler = () => {
        dispatch(logoutTC())
        navigate(routes.login)
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.navBlock}>
                <div className={s.navContainer}>
                    <div className={s.buttonBlock}>
                        <div className={s.icon} style={activeIcon}><FiUser/></div>
                        <span style={blackColor} className={s.navButton} onClick={()=>{setIsActive(true)}}>Profile Settings</span>
                    </div>
                    <div className={s.buttonBlock}>
                        <div className={s.icon} style={disableIcon}><FiArchive/></div>
                        <span style={greyColor} className={s.navButton} onClick={()=>{setIsActive(false)}}>Orders</span>
                    </div>
                    <div className={s.buttonBlock} onClick={onClickHandler}>
                        <div className={s.icon}><FiLogOut/></div>
                        <span  className={s.navButton}>Sign Out</span>
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