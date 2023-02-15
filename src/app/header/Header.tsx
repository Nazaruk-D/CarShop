import React from 'react';
import s from './Header.module.scss'
import teslaLogoWhite from './../../common/assets/teslaLogoWhite.svg'
import teslaLogoBlack from './../../common/assets/teslaLogoBlack.svg'
import {NavLink} from "react-router-dom";
import {routes} from "../routes/routes";

type HeaderPropsType = {
    position?: 'fixed'
    color?: string
}

const Header: React.FC<HeaderPropsType> = ({position, color}) => {
    return (
        <div className={s.headerContainer} style={{position, color}}>
            <div className={s.logoBlock}>
                <NavLink to={routes.mainPage} className={s.menuText}><img src={color === 'white' ? teslaLogoWhite : teslaLogoBlack} alt="teslaLogo" className={s.logo}/></NavLink>
            </div>
            <div className={s.menuBlock} >
                <NavLink to={routes.modelS} className={s.menuText} style={{color}}>Model S</NavLink>
                <NavLink to={routes.model3} className={s.menuText} style={{color}}>Model 3</NavLink>
                <NavLink to={routes.modelX} className={s.menuText} style={{color}}>Model X</NavLink>
                <NavLink to={routes.modelY} className={s.menuText} style={{color}}>Model Y</NavLink>
                <NavLink to={routes.solarRoof} className={s.menuText} style={{color}}>Solar Roof</NavLink>
                <NavLink to={routes.solarPanels} className={s.menuText} style={{color}}>Solar Panels</NavLink>
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