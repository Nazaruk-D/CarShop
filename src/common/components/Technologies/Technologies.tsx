import React from 'react';
import s from './Technologies.module.scss'

const Fade = require("react-reveal/Fade")

type TechnologiesPropsType = {
    topText?: string
    image?: string
    bottomText: string
}

const Technologies: React.FC<TechnologiesPropsType> = ({bottomText, topText, image}) => {
    return (
        <div className={s.textBlock}>
            <Fade bottom>
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
            </Fade>
        </div>
    );
};

export default Technologies;