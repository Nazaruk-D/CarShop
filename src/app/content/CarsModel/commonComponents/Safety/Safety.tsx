import React from 'react';
import s from './Safety.module.scss'
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";
import Button from "../../../../../common/components/Button/Button";
import Characteristics, {
    CharacteristicsPropsType
} from "../../../../../common/components/Characteristics/Characteristics";


type SafetyPropsType = {
    backgroundImage: string
    subtitle: string
    title: string
    description: string
    img?: string
    flexDirection?: 'row' | 'row-reverse'
    characteristicsData?: CharacteristicsPropsType[]
    backgroundColor?: string
}

const Safety: React.FC<SafetyPropsType> = ({
                                               img,
                                               title,
                                               backgroundImage,
                                               flexDirection,
                                               subtitle,
                                               description,
                                               characteristicsData,
                                               backgroundColor
                                           }) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.safetyContainer} style={{flexDirection}}>
                <div className={s.imageBlock} style={{backgroundImage: `url(${backgroundImage})`, backgroundColor}}>
                    <video
                        autoPlay
                        id="my-player"
                        className={s.videoJs}
                        preload="auto"
                        muted
                        playsInline
                        controls={false}
                        data-autoplay-desktop={true}
                        data-autoplay-portrait={true}
                        data-autoplay-mobile={true}
                        data-play-on-hover={false}
                        src={backgroundImage}
                        loop
                        data-setup='{}'>
                    </video>
                    <div className={s.characteristics}>
                        {characteristicsData?.map((c, i) => <div style={{marginRight: 40}}><Characteristics key={i}
                                                                                                            topText={c.topText}
                                                                                                            measurement={c.measurement}
                                                                                                            bottomText={c.bottomText}/>
                        </div>)}
                    </div>
                    {characteristicsData
                        ? ''
                        : <div className={s.pseudoContainer}>
                            <div className={s.firstBlock}>
                                <span className={s.firstPseudo}>Impact Protection</span>
                            </div>
                            <div className={s.secondBlock}>
                                <span className={s.secondPseudo}>Rigid Structure</span>
                            </div>
                            <div className={s.thirdBlock}>
                                <span className={s.thirdPseudo}>Low Center of Gravity</span>
                            </div>
                        </div>
                    }
                </div>
                <div className={s.descriptionBlock}>
                    <div className={s.xxx}></div>
                    <div className={s.textContainer}>
                        <div className={s.text}>
                        <span className={s.titleBlock}>
                            <h3 className={s.subtitle}>{subtitle}</h3>
                            <h2 className={s.title}>{title}</h2>
                        </span>
                            {description}
                        </div>
                        <div className={s.buttonsBlock}>
                            <PrimaryButton title={'Order now'} color={'black'} secondColor={'white'} onClick={() => {
                            }}/>
                            <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                                    color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;