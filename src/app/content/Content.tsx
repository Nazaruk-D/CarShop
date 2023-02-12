import React, {useEffect, useState} from 'react';
import s from './Content.module.scss'
import Car from "./Car/Car";
// @ts-ignore
import model3 from '../../common/assets/model3.jfif'
// @ts-ignore
import modelY from '../../common/assets/modelY.jfif'
// @ts-ignore
import modelS from '../../common/assets/modelS.jfif'
// @ts-ignore
import modelX from '../../common/assets/modelX.jfif'
// @ts-ignore
import solarPanels from '../../common/assets/solarPanels.jfif'
import solarRoof from '../../common/assets/solarRoof.webp'
// @ts-ignore
import accessories from '../../common/assets/Accessories.jfif'
import {scroller} from 'react-scroll'


const Content = () => {
    console.log('content render')
    const cars = ['Model 3', 'Model Y', 'Model S', 'Model X', 'Solar Panels', 'Solar Roof', 'Accessories']
    const [scroll, setScroll] = useState(0)

    const handleClickScroll = (e: WheelEvent) => {
        if (e.deltaY === 150) {
            setScroll(prev => prev + 1)
        } else if (e.deltaY === -150) {
            setScroll(prev => prev - 1)
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", (e) => handleClickScroll(e))
        return () => window.removeEventListener("wheel", (e) => handleClickScroll(e));
    }, []);

    useEffect(() => {
        if (scroll > cars.length-1) {
            setScroll(cars.length - 1)
        }
        if (scroll < 0) {
            setScroll(0)
        }
        scroller.scrollTo(cars[scroll], {
            duration: 200,
            smooth: true,
            offset: 0,
        })
    }, [scroll, cars])

    return (
        <div className={s.contentContainer}>
            <Car backgroundImage={model3} model={'Model 3'} conditions={'Leasing starting at $349/mo'}
                 firstButtonName={'Custom Order'} secondButtonName={'Demo Drive'}/>
            <Car backgroundImage={modelY} model={'Model Y'} firstButtonName={'Custom Order'}
                 secondButtonName={'Demo Drive'}/>
            <Car backgroundImage={modelS} model={'Model S'} conditions={'Schedule a Demo Drive'}
                 firstButtonName={'Custom Order'} secondButtonName={'View Inventory'}/>
            <Car backgroundImage={modelX} model={'Model X'} conditions={'Schedule a Demo Drive'}
                 firstButtonName={'Custom Order'} secondButtonName={'View Inventory'}/>
            <Car backgroundImage={solarPanels} model={'Solar Panels'} conditions={'Lowest Cost Solar Panels in America'}
                 firstButtonName={'Order Now'} secondButtonName={'Learn More'}/>
            <Car backgroundImage={solarRoof} model={'Solar Roof'} conditions={'Produce Clean Energy From Your Roof'}
                 firstButtonName={'Order Now'} secondButtonName={'Learn More'}/>
            <Car backgroundImage={accessories} model={'Accessories'} firstButtonName={'Shop Now'}
                 secondButtonName={'Learn More'}/>
        </div>
    );
};

export default Content;