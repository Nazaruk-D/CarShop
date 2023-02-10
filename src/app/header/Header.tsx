import React from 'react';
import s from './Header.module.scss'
import TeslaLogo from './../../common/assets/TeslaLogo.png'

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.logoBlock}>
                <img src={TeslaLogo} alt="teslaLogo" className={s.logo}/>
            </div>
            <div className={s.menuBlock}>
                <div className={s.menuText}>Model S</div>
                <div className={s.menuText}>Model 3</div>
                <div className={s.menuText}>Model X</div>
                <div className={s.menuText}>Model Y</div>
                <div className={s.menuText}>Solar Roof</div>
                <div className={s.menuText}>Solar Panels</div>
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