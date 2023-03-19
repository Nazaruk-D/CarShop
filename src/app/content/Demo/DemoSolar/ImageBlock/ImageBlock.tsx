import React from 'react';
import s from './ImageBlock.module.scss'
//@ts-ignore
import energyHeroSolar from '../../../../../common/assets/energyHeroSolar.jfif'


const ImageBlock = () => {
    return (
        <div className={s.mainContainer} style={{backgroundImage: `url(${energyHeroSolar})`}}>

        </div>
    );
};

export default ImageBlock;