import React from 'react';
import s from "./Modification.module.scss"
import Title from "./TItle/Title";

const Modification = () => {
    return (
        <div className={s.modificationContainer}>
            <div className={s.modificationBlock}>
                <Title/>
            </div>
        </div>
    );
};

export default Modification;