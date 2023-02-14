import React from 'react';
import s from './Comfort.module.scss'
import TitleBlock from "../../../../../common/components/TitleBlock/TitleBlock";
//@ts-ignore
import firstInteriorModelY from '../../../../../common/assets/firstInteriorModelY.jfif'

const Comfort = () => {
    return (
        <div className={s.interiorContainer}>
            <TitleBlock title={'A Place For Everything'} subtitle={'Utility'}
                        description={'Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.'}/>
            <div className={s.imageBlock}>
                <div className={s.imageContainer} style={{backgroundImage: `url(${firstInteriorModelY})`}}>

                </div>

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