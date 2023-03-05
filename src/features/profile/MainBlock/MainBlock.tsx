import React, {useState} from 'react';
import s from "./MainBlock.module.scss"
import {useAppDispatch} from "../../../app/store/store";
import {useNavigate} from "react-router-dom";
import {logoutTC} from "../../auth/auth-reducer";
import {routes} from "../../../app/routes/routes";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import Orders from "./Orders/Orders";
import { FiUser, FiArchive, FiLogOut } from "react-icons/fi";
import {useModal} from "../Modal/useModal";
import Modal from "../Modal/Modal";
import {IconType} from "react-icons";

export type MainPropsType = {
    setModalActive: (modalActive: boolean) => void
}

const navData: NavDataType[] = [
    {id: 0, name: 'Profile Settings', icon: <FiUser/>},
    {id: 1, name: 'Orders', icon: <FiArchive/>},
]

type NavDataType = {
    id: number
    name: string
    icon: JSX.Element
}

const MainBlock: React.FC<MainPropsType> = ({setModalActive}) => {
    const [item, setItem] = useState(1)
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
                    {navData.map((b, i) => <div className={s.buttonBlock} onClick={() => setItem(i)}>
                        <div className={s.icon} style={{backgroundColor: item === i ? 'rgba(1,1,1,0.05)' : '',}}>{b.icon}</div>
                        <span style={{color: item === i ? 'black' : '',}} className={s.navButton} >{b.name}</span>
                    </div>)}
                    <div className={s.buttonBlock}>
                        <div className={s.icon}><FiLogOut/></div>
                        <span onClick={onClickHandler} className={s.navButton}>Sign Out</span>
                    </div>
                </div>
            </div>
            <div className={s.contentContainer}>
                {item === 0 && <ProfileSettings setModalActive={setModalActive}/>}
                {item === 1 && <Orders/>}
            </div>
        </div>
    );
};

export default MainBlock;