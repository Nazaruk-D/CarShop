import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {routes} from "../routes/routes";
import Logo from "../../common/components/Logo/Logo";
import {IoMdClose} from "react-icons/io";


type HeaderPropsType = {
    position?: 'fixed'
    color?: string
}

const Header: React.FC<HeaderPropsType> = ({position, color}) => {
    const { pathname } = useLocation();
    const [toggleMenu, setToggleMenu] = useState(false)
    const [logo, setLogo] = useState(true)
    const mobileMenuColor = window.innerWidth < 1200 ? 'black' : color

    const onClickHandler = () => {
        setToggleMenu(!toggleMenu)
        setLogo(!logo)
    }

    const closeHandler = () => {
        setToggleMenu(!toggleMenu)
        setLogo(!logo)
    }


    useEffect(() => {
        if (window.innerWidth < 1200) {
            setToggleMenu(true)
        }
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.headerContainer} style={{position, color}}>
                <div className={s.logo}><Logo color={color}/></div>
            {!toggleMenu
                ? <div  className={s.menuContainer}>
                    <div className={s.close} onClick={closeHandler}><IoMdClose style={{color: "black"}}/></div>
                    <div className={s.menuBlock}>
                        <NavLink to={routes.modelS} className={s.menuText} style={{color: mobileMenuColor}}>Model S</NavLink>
                        <NavLink to={routes.model3} className={s.menuText} style={{color: mobileMenuColor}}>Model 3</NavLink>
                        <NavLink to={routes.modelX} className={s.menuText} style={{color: mobileMenuColor}}>Model X</NavLink>
                        <NavLink to={routes.modelY} className={s.menuText} style={{color: mobileMenuColor}}>Model Y</NavLink>
                        <NavLink to={routes.solarRoof} className={s.menuText} style={{color: mobileMenuColor}}>Solar Roof</NavLink>
                        <NavLink to={routes.solarPanels} className={s.menuText} style={{color: mobileMenuColor}}>Solar Panels</NavLink>
                    </div>
                    <div className={s.accountBlock}>
                        <NavLink to={routes.shop} className={s.accountText} style={{color: mobileMenuColor}}>Shop</NavLink>
                        <NavLink to={routes.profile} className={s.accountText} style={{color: mobileMenuColor}}>Account</NavLink>
                        <NavLink to={routes.cybertruck} className={s.accountText} style={{color: mobileMenuColor}}>Сybertruck</NavLink>
                    </div>
                </div>
                : <div className={s.menuButtonBlock}>
                    <button className={s.menuButton} onClick={onClickHandler}>Menu</button>
                </div>
            }
        </div>
    );
};

export default Header;