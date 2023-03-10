import React from 'react';
import s from "./HeaderBlock.module.scss"
import Logo from "../../../../common/components/Logo/Logo";

const HeaderBlock = () => {
    return (
        <div className={s.headerContainer}>
            <Logo color={"black"}/>
        </div>
    );
};

export default HeaderBlock;