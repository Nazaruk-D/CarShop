import React from 'react';
import s from './Safety.module.scss'
import PrimaryButton from "../../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import Button from "../../../../../common/components/buttons/Button/Button";
import Characteristics, {
    CharacteristicsPropsType
} from "../../../../../common/components/Characteristics/Characteristics";
import VideoPlayer from "../../../../../common/components/VideoPlayer/VideoPlayer";

const Fade = require("react-reveal/Fade")


type SafetyPropsType = {
    backgroundImage: string
    subtitle: string
    title: string
    description: string
    img?: string
    flexDirection?: 'row' | 'row-reverse'
    characteristicsData?: CharacteristicsPropsType[]
    backgroundColor?: string
    backgroundSize?: string
}

const Safety: React.FC<SafetyPropsType> = ({
                                               img,
                                               title,
                                               backgroundImage,
                                               flexDirection,
                                               subtitle,
                                               description,
                                               characteristicsData,
                                               backgroundColor,
                                               backgroundSize
                                           }) => {

    const mobileDirection = window.innerWidth < 1200 ? {} : {flexDirection}

    return (
        <div className={s.mainContainer}>
            <div className={s.safetyContainer} style={mobileDirection}>
                <div className={s.imageBlock}
                     style={{backgroundImage: `url(${backgroundImage})`, backgroundColor, backgroundSize}}>
                    <VideoPlayer link={backgroundImage} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                    <div className={s.characteristics}>
                        {characteristicsData?.map((c, i) => <div style={{marginRight: 40}} key={i}>
                            <Characteristics
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
                    <div className={s.textContainer}>
                        <div className={s.text}>
                        <span className={s.titleBlock}>
                            <Fade bottom>
                                <h3 className={s.subtitle}>{subtitle}</h3>
                                <h2 className={s.title}>{title}</h2>
                            </Fade>
                        </span>
                            <Fade bottom>
                                {description}
                            </Fade>
                        </div>
                        <div className={s.buttonsBlock}>
                            <Fade bottom>
                                <PrimaryButton title={'Order now'} color={'black'} secondColor={'white'}
                                               onClick={() => {
                                               }}/>
                                <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                                        color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
                                }}/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;