import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {routes} from "../routes/routes";
import Logo from "../../common/components/Logo/Logo";
import Nav from "./Nav";

const Fade = require("react-reveal/Fade")

type HeaderPropsType = {
    position?: 'fixed'
    color?: string
}

const Header: React.FC<HeaderPropsType> = ({position, color}) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [logo, setLogo] = useState(true)

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

    return (
        <div className={s.headerContainer} style={{position, color}}>
            {/*<div className={s.logoNav}>*/}
            {/*    <Logo color={color}/>*/}
            {/*</div>*/}
            {/*{!logo &&*/}
            {/*    <div className={s.logo}>*/}
            {/*        <Logo color={color}/>*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{toggleMenu*/}
            {/*    ? <Nav color={color!}/>*/}
            {/*    : <div className={s.menuButtonBlock}>*/}
            {/*        <button className={s.menuButton} onClick={onClickHandler}>Menu</button>*/}
            {/*    </div>*/}
            {/*}*/}


            {/*<div className={s.logoNav}>*/}
            {/*    <Logo color={color}/>*/}
            {/*</div>*/}
            {/*{toggleMenu*/}
            {/*    ? <Nav color={color!}/>*/}
            {/*    : <div className={s.menuButtonBlock}>*/}
            {/*        <button className={s.menuButton} onClick={onClickHandler}>Menu</button>*/}
            {/*    </div>*/}
            {/*}*/}


            {logo &&
                // <div style={{width: "50%", paddingLeft: "20px", boxSizing: "border-box", backgroundColor: 'yellow'}}><Logo color={color}/></div>
                <div className={s.logo}><Logo color={color}/></div>
            }
            {!toggleMenu
                ? <>
                    <Nav color={color!}/>
                    <div className={s.close} onClick={closeHandler}>X</div>
                </>
                : <div className={s.menuButtonBlock}>
                    <button className={s.menuButton} onClick={onClickHandler}>Menu</button>
                </div>
            }

        </div>
    );
};

export default Header;