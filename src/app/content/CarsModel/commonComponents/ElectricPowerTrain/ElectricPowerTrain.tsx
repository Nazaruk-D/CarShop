import React, {useEffect, useState} from 'react';
import s from './ElectricPowerTrain.module.scss'
// @ts-ignore
import firstImage from '../../../../../common/assets/ModelSDualMotorPowertrain-CarouselDesktop.jfif'
// @ts-ignore
import secondImage from '../../../../../common/assets/ModelSPlaidTriMotorPowertrainCarouselDesktop.jfif'
import Characteristics, {
    CharacteristicsPropsType
} from "../../../../../common/components/Characteristics/Characteristics";


export type ElectricPowerTrainPropsType = {
    title: string
    description: string
    data: SomeType[]
}

export type SomeType = {
    title: string
    description: string
    characteristicsData: CharacteristicsPropsType[]
}


const ElectricPowerTrain: React.FC<ElectricPowerTrainPropsType> = ({title, description,data }) => {
    const [isFirstActive, setIsFirstActive] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFirstActive(!isFirstActive)
        }, 6000)
        return () => clearTimeout(timer);
    }, [isFirstActive])

    return (
        <div className={s.ElectricContainer}>
            <div className={s.ElectricBlock}>
                <div className={s.text}>
                    <h2 className={s.title}>{title}</h2>
                    <span className={s.description}>{description}</span>
                </div>
                <div className={s.image}>
                    <div className={s.imageBlock}
                         style={{backgroundImage: `url(${isFirstActive ? firstImage : secondImage})`}}></div>
                </div>
                <div className={s.info}>
                    <div className={s.firstContainer} style={{opacity: isFirstActive ? 1 : 0.5}} onClick={() => {
                        setIsFirstActive(true)
                    }}>
                        <div className={s.firstBlock}>
                            <div className={s.text}>
                                <h4 className={s.title}>{data[0].title}</h4>
                                <span className={s.description}>{data[0].description}</span>
                            </div>
                            <div className={s.characteristics}>
                                {data[0].characteristicsData.map( (d, i) => <Characteristics key={i} topText={d.topText} measurement={d.measurement} bottomText={d.bottomText}
                                                                         color={d.color}/>)}
                            </div>
                        </div>
                    </div>
                    <div className={s.secondContainer} style={{opacity: !isFirstActive ? 1 : 0.5}} onClick={() => {
                        setIsFirstActive(false)
                    }}>
                        <div className={s.secondBlock}>
                            <div className={s.text}>
                                <h4 className={s.title}>{data[1].title}</h4>
                                <span className={s.description}>{data[1].description}</span>
                            </div>
                            <div className={s.characteristics}>
                                {data[1].characteristicsData.map( (d, i) => <Characteristics key={i} topText={d.topText} measurement={d.measurement} bottomText={d.bottomText}
                                                                                             color={d.color}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectricPowerTrain;