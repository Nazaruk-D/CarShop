import React from 'react';
import s from './Characteristics.module.scss'

const Fade = require("react-reveal/Fade")


export type CharacteristicsPropsType = {
    topText: string
    measurement?: string
    bottomText: string
    color?: string
}

const Characteristics: React.FC<CharacteristicsPropsType> = ({bottomText, topText, measurement, color}) => {
    return (
        <Fade bottom cascade>
            <div className={s.characteristicsBlock} style={{color}}>
                {measurement
                    ? <div className={s.topTextBlock}>
                        <div className={s.topTextContainer}>
                            <div className={s.mainInfo}>{topText}</div>
                            <div className={s.measurement}>{measurement}</div>
                        </div>
                    </div>
                    : <div className={s.mainTopTextBlock}>
                        <div className={s.mainInfo}>{topText}</div>
                    </div>
                }
                <div className={s.bottomText}>
                    <p>{bottomText}</p>
                </div>
            </div>
        </Fade>
    );
};

export default Characteristics;