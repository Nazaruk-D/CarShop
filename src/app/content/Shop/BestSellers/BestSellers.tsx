import React, {useState} from 'react';
import s from './BestSellers.module.scss'
import img161659900A02000 from './../../../../common/assets/shop/1616599-00-A_0_2000.avif'
import wallConnector from './../../../../common/assets/shop/Gen3WC.avif'
import petLiner from './../../../../common/assets/shop/PetLiner.avif'


const items: itemsType[] = [
    {
        image: img161659900A02000,
        subTitle: "Model Y All-Weather Interior Liners",
        link: 'xxx',
    },
    {
        image: wallConnector,
        subTitle: "Wall Connector",
        link: 'xxx',
    },
    {
        image: petLiner,
        subTitle: "Model S/3/Y Pet Liner",
        link: 'xxx',
    },
    {
        image: img161659900A02000,
        subTitle: "Model 4",
        link: 'xxx',
    },
    {
        image: img161659900A02000,
        subTitle: "Model 5",
        link: 'xxx',
    },
    {
        image: img161659900A02000,
        subTitle: "Model 6",
        link: 'xxx',
    },
]

const BestSellers = () => {
    const [startId, setStartId] = useState<number>(0)
    const [leftArrow, setLeftArrow] = useState(false)
    const [rightArrow, setRightArrow] = useState(false)

    const newItems = items.slice(startId, items.length).concat(items.slice(0,startId))

    const onMouseEnterHandler = () => {
        setLeftArrow (true)
        setRightArrow (true)
    }

    const onMouseLeaveHandler = () => {
        setLeftArrow (false)
        setRightArrow (false)
    }

    const backwardHandler = () => {
        if(startId === 0) {
            setStartId(items.length - 1)
        } else setStartId( prev => prev - 1)
    }

    const forwardHandler = () => {
        if(startId === items.length - 1) {
            setStartId(0)
        } else setStartId( prev => prev + 1)
    }


    return (
        <div className={s.bestSellersContainer}>
            <h1 className={s.title}>Best Sellers</h1>
            <div className={s.bestSellersBlock} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
                {leftArrow && <div className={s.leftArrow} onClick={backwardHandler}></div>}
                {newItems.map((item, i) => <div key={i}>
                    <img src={item.image} alt={item.subTitle} className={s.block}/>
                    <h3 className={s.subTitle}>{item.subTitle}</h3>
                </div>)}
                {rightArrow && <div className={s.rightArrow} onClick={forwardHandler}></div>}
            </div>
        </div>
    );
};

export default BestSellers;


type itemsType = {
    image: string,
    subTitle: string,
    link: string
}