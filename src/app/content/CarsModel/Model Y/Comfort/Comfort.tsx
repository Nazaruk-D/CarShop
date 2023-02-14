import React from 'react';
import s from './Comfort.module.scss'
import TitleBlock from "../../../../../common/components/TitleBlock/TitleBlock";
//@ts-ignore
import firstInteriorModelY from '../../../../../common/assets/firstInteriorModelY.jfif'

const Comfort = () => {
    return (
        <div className={s.comfortContainer}>
           <div className={s.imageBlock}>
                <div className={s.imageContainer} style={{backgroundImage: `url(${firstInteriorModelY})`}}></div>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.descriptionContainer}>
                    <div className={s.buttonsBlock}>
                        <div className={s.buttonOne} onClick={()=>{}}></div>
                        <div className={s.buttonTwo} onClick={()=>{}}></div>
                    </div>
                    <div className={s.description}>
                        Versatile seating and storage for cargo and passengers
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comfort;