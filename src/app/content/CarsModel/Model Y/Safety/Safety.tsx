import React from 'react';
import s from './Safety.module.scss'
import safetyImage from '../../../../../common/assets/safetyImage.png'
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";
import Button from "../../../../../common/components/Button/Button";
import TitleBlock from "../../../../../common/components/TitleBlock/TitleBlock";


const Safety = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.safetyContainer}>
                <div className={s.imageBlock} style={{backgroundImage: `url(${safetyImage})`}}></div>
                <div className={s.descriptionBlock}>
                    <div className={s.textContainer}>
                        <div className={s.text}>
                        <span className={s.titleBlock}>
                            <h3 className={s.subtitle}>Safety</h3>
                            <h2 className={s.title}>Designed for Safety</h2>
                        </span>
                            <div className={s.description}>
                                <p className={s.paragraph}>Safety is the most important part of every Tesla. We design our vehicles to exceed safety
                                    standards.</p>
                                <span className={s.paragraphTitle}>5-Star Rating</span>
                                <p className={s.paragraph}>Model Y achieved NHTSA 5-star safety ratings in every category and subcategory.</p>
                                <span className={s.paragraphTitle}>Top Safety Pick+</span>
                                <p className={s.paragraph}>Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness
                                    and front crash prevention categories.</p>
                            </div>
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
            <TitleBlock title={'A Place For Everything'} subtitle={'Utility'}
                        description={'Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.'}/>
        </div>
    );
};

export default Safety;