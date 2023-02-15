import React, {useEffect, useState} from 'react';
import s from './Comfort.module.scss'
//@ts-ignore
import firstInteriorModelY from '../../../../../common/assets/firstInteriorModelY.jfif'
//@ts-ignore
import secondInteriorModelY from '../../../../../common/assets/secondInteriorModelY.jfif'
import RoundButton from "../../../../../common/components/RoundButton/RoundButton";


const Comfort = () => {
    const [isFirstActive, setIsFirstActive] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFirstActive(!isFirstActive)
        }, 6000)
        return () => clearTimeout(timer);
    }, [isFirstActive])

    return (
        <div className={s.comfortContainer}>
           <div className={s.imageBlock}>
                <div className={s.imageContainer} style={{backgroundImage: `url(${isFirstActive ? firstInteriorModelY : secondInteriorModelY})`}}></div>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.descriptionContainer}>
                    <div className={s.buttonsBlock}>
                        <RoundButton color={isFirstActive ? 'black' : '#c9c9c9'} onClick={() => {setIsFirstActive(true)}}/>
                        <RoundButton color={isFirstActive ? '#c9c9c9' : 'black'} onClick={() => {setIsFirstActive(false)}}/>
                    </div>
                    <div className={s.description}>
                        {isFirstActive
                        ? 'Versatile seating and storage for cargo and passengers'
                        : 'Room for up to seven with optional third row'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comfort;