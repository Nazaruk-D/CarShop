import React from 'react';
import s from "./Design.module.scss"
import Paint from "./Paint/Paint";
import Wheels from "./Wheels/Wheels";
import Interior from "./Interior/Interior";

const Design = () => {
    return (
        <div className={s.designContainer}>
            <Paint/>
            <Wheels/>
            <Interior/>
        </div>
    );
};

export default Design;