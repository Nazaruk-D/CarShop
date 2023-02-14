import React from 'react';
import s from './Characteristics.module.scss'

export type CharacteristicsPropsType = {
    topText: string
    measurement?: string
    bottomText: string
}

const Characteristics: React.FC<CharacteristicsPropsType> = ({bottomText, topText, measurement}) => {
    return (
        <div className={s.characteristicsBlock}>
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
    );
};

export default Characteristics;