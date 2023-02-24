import React from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {routes} from "../routes/routes";
import Logo from "../../common/components/Logo/Logo";

type HeaderPropsType = {
    position?: 'fixed'
    color?: string
}

const Header: React.FC<HeaderPropsType> = ({position, color}) => {
    return (
        <div className={s.headerContainer} style={{position, color}}>
            <Logo color={color}/>
            <div className={s.menuBlock}>
                <NavLink to={routes.modelS} className={s.menuText} style={{color}}>Model S</NavLink>
                <NavLink to={routes.model3} className={s.menuText} style={{color}}>Model 3</NavLink>
                <NavLink to={routes.modelX} className={s.menuText} style={{color}}>Model X</NavLink>
                <NavLink to={routes.modelY} className={s.menuText} style={{color}}>Model Y</NavLink>
                <NavLink to={routes.solarRoof} className={s.menuText} style={{color}}>Solar Roof</NavLink>
                <NavLink to={routes.solarPanels} className={s.menuText} style={{color}}>Solar Panels</NavLink>
            </div>
            <div className={s.accountBlock}>
                <NavLink to={routes.shop} className={s.accountText} style={{color}}>Shop</NavLink>
                <div className={s.accountText}>Account</div>
                <div className={s.accountText}>Menu</div>
            </div>
        </div>
    );
};

export default Header;