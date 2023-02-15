import React from 'react';
import s from './Specs.module.scss'
//@ts-ignore
import modelYBlack from '../../../../../common/assets/modelYBlack.jfif'
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";
import Button from "../../../../../common/components/Button/Button";



const Specs = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.specsContainer}>
                <div className={s.imageBlock} style={{backgroundImage: `url(${modelYBlack})`}}></div>
                <div className={s.specsBlock}>

                </div>
            </div>
            <div className={s.buttonsBlock}>
                <div className={s.buttonsContainer}>
                    <PrimaryButton title={'Owner\'s Manual'} color={'white'} secondColor={'black'} onClick={() => {
                    }}/>
                    <Button title={'Compare'} backgroundColor={'rgba(244, 244, 244, 0.15    )'}
                            color={'rgba(255,255,255,0.8)'} onClick={() => {
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Specs;