import React from 'react';
import TopBlock from "./TopBlock/TopBlock";
import BestSellers from "./BestSellers/BestSellers";
import PresentationBlock from "../../../common/components/PresentationBlock/PresentationBlock";
import MS from "../../../common/assets/shop/MS_web.avif"
import M3 from "../../../common/assets/shop/M3_web.avif"
import MX from "../../../common/assets/shop/MX_web.avif"
import MY from "../../../common/assets/shop/MY_web.avif"
import charging from "../../../common/assets/shop/Charging_web.avif"
import LifeStyle from "../../../common/assets/shop/LifeStyle_web.avif"
import Button from "../../../common/components/buttons/Button/Button";
import s from "./Shop.module.scss"
import Footer from "../CarsModel/commonComponents/Footer/Footer";
import ClothesBlock from "./ClothesBlock/ClothesBlock";

const Shop = () => {
    return (
        <div>
            <TopBlock/>
            <BestSellers/>
            <PresentationBlock backgroundImage={MS} model={''}>
                <div className={s.presentationBlock}>
                    <div className={s.title}>Model S Accessories</div>
                    <Button title={'Shop now'} onClick={()=>{}} color={"94a3b8"} backgroundColor={"94a3b8"}/>
                </div>
            </PresentationBlock>
            <PresentationBlock backgroundImage={M3} model={''}>
                <div className={s.presentationBlock}>
                    <div className={s.title}>Model 3 Accessories</div>
                    <Button title={'Shop now'} onClick={()=>{}} color={"94a3b8"} backgroundColor={"94a3b8"}/>
                </div>
            </PresentationBlock>
            <PresentationBlock backgroundImage={MX} model={''}>
                <div className={s.presentationBlock}>
                    <div className={s.title}>Model X Accessories</div>
                    <Button title={'Shop now'} onClick={()=>{}} color={"94a3b8"} backgroundColor={"94a3b8"}/>
                </div>
            </PresentationBlock>
            <PresentationBlock backgroundImage={MY} model={''}>
                <div className={s.presentationBlock}>
                    <div className={s.title}>Model Y Accessories</div>
                    <Button title={'Shop now'} onClick={()=>{}} color={"94a3b8"} backgroundColor={"94a3b8"}/>
                </div>
            </PresentationBlock>
            <PresentationBlock backgroundImage={charging} model={''}>
                <div className={s.presentationBlock}>
                    <div className={s.title}>Charging</div>
                    <Button title={'Shop now'} onClick={()=>{}} color={"94a3b8"} backgroundColor={"94a3b8"}/>
                </div>
            </PresentationBlock>
            <ClothesBlock/>
            <PresentationBlock backgroundImage={LifeStyle} model={''}>
                <div className={s.presentationBlock}>
                    <div className={s.title}>Lifestyle</div>
                    <Button title={'Shop now'} onClick={()=>{}} color={"94a3b8"} backgroundColor={"94a3b8"}/>
                </div>
            </PresentationBlock>
            <Footer description={false}/>
        </div>
    );
};

export default Shop;