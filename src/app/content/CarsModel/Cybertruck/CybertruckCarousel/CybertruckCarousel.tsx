import React, {useCallback, useEffect, useState} from 'react';
import s from "./CybertruckCarousel.module.scss"
import cybertruckFirstSet from '../../../../../common/assets/cybertruckFirstSet.jpg'
import cybertruckSecondSet from '../../../../../common/assets/cybertruckSecondSet.jpg'
import cybertruckThirdSet from '../../../../../common/assets/cybertruckThirdSet.jpg'
import cybertruckFourthSet from '../../../../../common/assets/cybertruckFourthSet.jpg'
import cybertruckFifthSet from '../../../../../common/assets/cybertruckFifthSet.jpg'
import cybertruckSixthSet from '../../../../../common/assets/cybertruckSixthSet.jpg'

const carouselData = [
    {id: 1, img: cybertruckFirstSet},
    {id: 2, img: cybertruckSecondSet},
    {id: 3, img: cybertruckThirdSet},
    {id: 4, img: cybertruckFourthSet},
    {id: 5, img: cybertruckFifthSet},
    {id: 6, img: cybertruckSixthSet},
]


const CybertruckCarousel = () => {
    const [item, setItem] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (item === carouselData.length - 1) {
                setItem(0)
            } else {
                setItem(item + 1)
            }
        }, 6000)
        return () => clearTimeout(timer);
    }, [item])

    return (
        <div className={s.mainContainer}>
            <div className={s.imageContainer} style={{backgroundImage: `url(${carouselData[item].img})`}}></div>
            <div style={{color: 'white'}}>{item}</div>
        </div>
    );
};

export default CybertruckCarousel;