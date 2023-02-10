import React from 'react';
import s from './Content.module.scss'
import Button from "../../common/components/Button/Button";

const Content = () => {
    return (
        <div className={s.contentContainer}>
            <div className={s.contentBlock}>
                <div className={s.titleBlock}>
                    <h1 className={s.description}>Model 3</h1>
                    <h3 className={s.conditions}>Leasing starting at $349/mo</h3>
                </div>
                <div className={s.buttonBlock}>
                    <Button title={'Custom order'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'} onClick={()=>{}}/>
                    <Button title={'Demo Drive'} backgroundColor={'rgba(244, 244, 244, 0.65)'} color={'rgba(23, 26, 32, 0.8)'} onClick={()=>{}}/>
                </div>
            </div>
        </div>
    );
};

export default Content;