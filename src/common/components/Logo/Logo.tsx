import React from 'react';
import s from "./Logo.module.scss";
import {NavLink} from "react-router-dom";
import {routes} from "../../../app/routes/routes";
import teslaLogoWhite from "../../assets/teslaLogoWhite.svg";
import teslaLogoBlack from "../../assets/teslaLogoBlack.svg";

type LogoPropsType = {
    color?: string
}

const Logo: React.FC<LogoPropsType> = ({color}) => {
    return (
        <div className={s.logoBlock} onClick={() => console.log(123)}>
            <NavLink to={routes.mainPage} className={s.menuText}><img src={color === 'white' ? teslaLogoWhite : teslaLogoBlack} alt="teslaLogo" className={s.logo}/></NavLink>
        </div>
    );
};

export default Logo;