import React from 'react';
import s from "./Modification.module.scss"
import Title from "./Title/Title";
import Options from "./Options/Options";
import Design from "./Design/Design";

const Modification = () => {
    return (
        <div className={s.modificationContainer}>
            <div className={s.modificationBlock}>
                <Title/>
                <Options/>
                <Design/>
            </div>
        </div>
    );
};

export default Modification;