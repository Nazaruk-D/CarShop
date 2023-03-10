import React from 'react';
import s from "./Modification.module.scss"
import Title from "./Title/Title";
import Options from "./Options/Options";

const Modification = () => {
    return (
        <div className={s.modificationContainer}>
            <div className={s.modificationBlock}>
                <Title/>
                <Options/>
            </div>
        </div>
    );
};

export default Modification;