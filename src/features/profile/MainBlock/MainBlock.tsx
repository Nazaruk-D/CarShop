import React, {useState} from 'react';
import s from "./MainBlock.module.scss"
import {useAppDispatch, useAppSelector} from "../../../app/store/store";
import {useNavigate} from "react-router-dom";
import {logoutTC} from "../../auth/auth-reducer";
import {routes} from "../../../app/routes/routes";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import Orders from "./Orders/Orders";
import {FiArchive, FiLogOut, FiUser, FiUsers, FiMapPin} from "react-icons/fi";
import DemoDrivePanel from "./DemoDrivePanel/DemoDrivePanel";
import UsersList from "./UsersList/UsersList";
import DemoDriveOrders from "./DemoDriveOrders/DemoDriveOrders";



const userNavData: NavDataType[] = [
    {id: 0, name: 'Profile Settings', icon: <FiUser/>},
    {id: 1, name: 'Orders History', icon: <FiArchive/>},
    {id: 2, name: 'Demo Drive', icon: <FiMapPin/>},
]

const adminNavData: NavDataType[] = [
    {id: 0, name: 'Profile Settings', icon: <FiUser/>},
    {id: 1, name: 'Demo Drive Panel', icon: <FiArchive/>},
    {id: 2, name: 'Users Panel', icon: <FiUsers/>},
]

type NavDataType = {
    id: number
    name: string
    icon: JSX.Element
}

const MainBlock = () => {
    const [item, setItem] = useState(0)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {role} = useAppSelector(s => s.profile.user)

    const onClickHandler = () => {
        dispatch(logoutTC())
        navigate(routes.login)
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.navBlock}>
                <div className={s.navContainer}>
                    {role === 'admin'
                    ? adminNavData.map((b, i) => <div className={s.buttonBlock} onClick={() => setItem(i)} key={i}>
                                <div className={s.icon} style={{backgroundColor: item === i ? 'rgba(1,1,1,0.05)' : '',}}>{b.icon}</div>
                                <span style={{color: item === i ? 'black' : '',}} className={s.navButton} >{b.name}</span>
                            </div>)
                    : userNavData.map((b, i) => <div className={s.buttonBlock} onClick={() => setItem(i)} key={i}>
                                <div className={s.icon} style={{backgroundColor: item === i ? 'rgba(1,1,1,0.05)' : '',}}>{b.icon}</div>
                                <span style={{color: item === i ? 'black' : '',}} className={s.navButton} >{b.name}</span>
                            </div>)
                    }

                    <div className={s.buttonBlock} onClick={onClickHandler}>
                        <div className={s.icon}><FiLogOut/></div>
                        <span  className={s.navButton}>Sign Out</span>
                    </div>
                </div>
            </div>
            <div className={s.contentContainer}>
                {item === 0 && <ProfileSettings/>}
                {item === 1 && role === 'user' && <Orders/>}
                {item === 2 && role === 'user' && <DemoDriveOrders/>}
                {item === 1 && role === 'admin' && <DemoDrivePanel/>}
                {item === 2 && role === 'admin' && <UsersList/>}
            </div>
        </div>
    );
};

export default MainBlock;