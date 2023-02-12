import React from 'react';
import s from './Header.module.scss'
import TeslaLogo from './../../common/assets/TeslaLogo.png'
import {NavLink} from "react-router-dom";
import {routes} from "../routes/routes";

type HeaderPropsType = {
    position?: 'fixed'
}

const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.headerContainer} style={{position: props.position}}>
            <div className={s.logoBlock}>
                <NavLink to={routes.mainPage} className={s.menuText}><img src={TeslaLogo} alt="teslaLogo" className={s.logo}/></NavLink>
            </div>
            <div className={s.menuBlock}>
                <NavLink to={routes.modelS} className={s.menuText}>Model S</NavLink>
                <NavLink to={routes.model3} className={s.menuText}>Model 3</NavLink>
                <NavLink to={routes.modelX} className={s.menuText}>Model X</NavLink>
                <NavLink to={routes.modelY} className={s.menuText}>Model Y</NavLink>
                <NavLink to={routes.solarRoof} className={s.menuText}>Solar Roof</NavLink>
                <NavLink to={routes.solarPanels} className={s.menuText}>Solar Panels</NavLink>
            </div>
            <div className={s.accountBlock}>
                <div className={s.accountText}>Shop</div>
                <div className={s.accountText}>Account</div>
                <div className={s.accountText}>Menu</div>
            </div>
        </div>
    );
};

export default Header;