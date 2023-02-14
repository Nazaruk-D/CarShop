import React from 'react';
import s from './Technologies.module.scss'

type TechnologiesPropsType = {
    topText?: string
    image?: string
    bottomText: string
}

const Technologies: React.FC<TechnologiesPropsType> = ({bottomText, topText, image}) => {
    return (
        <div className={s.textBlock}>
            {image
                ? <div className={s.topText}>
                    <div style={{backgroundImage: `url(${image})`}} className={s.icon}></div>
                </div>
                : <div className={s.topText}>
                    {topText}
                </div>
            }
            <div className={s.bottomText}>
                {bottomText}
            </div>
        </div>
    );
};

export default Technologies;