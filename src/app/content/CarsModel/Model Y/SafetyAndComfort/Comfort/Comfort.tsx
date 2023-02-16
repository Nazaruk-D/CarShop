import React, {useEffect, useState} from 'react';
import s from './Comfort.module.scss'
import RoundButton from "../../../../../../common/components/RoundButton/RoundButton";
import TitleBlock from "../../../../../../common/components/TitleBlock/TitleBlock";
//@ts-ignore
import firstInteriorModelY from '../../../../../../common/assets/firstInteriorModelY.jfif'
//@ts-ignore
import secondInteriorModelY from '../../../../../../common/assets/secondInteriorModelY.jfif'

const Comfort = () => {
    const [isFirstActive, setIsFirstActive] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFirstActive(!isFirstActive)
        }, 6000)
        return () => clearTimeout(timer);
    }, [isFirstActive])

    return (
        <div className={s.mainContainer}>
            <TitleBlock title={'A Place For Everything'}
                        subtitle={'Utility'}
                        description={'Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.'}/>
            <div className={s.comfortContainer}>
                <div className={s.imageBlock}>
                    <div className={s.imageContainer}
                         style={{backgroundImage: `url(${isFirstActive ? firstInteriorModelY : secondInteriorModelY})`}}></div>
                </div>
                <div className={s.descriptionBlock}>
                    <div className={s.descriptionContainer}>
                        <div className={s.buttonsBlock}>
                            <RoundButton color={isFirstActive ? 'black' : '#c9c9c9'} onClick={() => {
                                setIsFirstActive(true)
                            }}/>
                            <RoundButton color={isFirstActive ? '#c9c9c9' : 'black'} onClick={() => {
                                setIsFirstActive(false)
                            }}/>
                        </div>
                        <div className={s.description}>
                            {isFirstActive
                                ? 'Versatile seating and storage for cargo and passengers'
                                : 'Room for up to seven with optional third row'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comfort;