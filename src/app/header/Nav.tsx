import React from 'react';
import s from "./Nav.module.scss";
import {NavLink} from "react-router-dom";
import {routes} from "../routes/routes";

type NavPropsType = {
    color: string
}

const Nav: React.FC<NavPropsType> = ({color}) => {
    return (
        <>
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
                <NavLink to={routes.profile} className={s.accountText} style={{color}}>Account</NavLink>
                <NavLink to={routes.cybertruck} className={s.accountText} style={{color}}>Сybertruck</NavLink>
            </div>
            {/*<div className={s.close} onClick={closeHandler}>X</div>*/}
        </>
    );
};

export default Nav;