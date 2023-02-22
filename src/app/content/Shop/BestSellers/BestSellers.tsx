import React from 'react';
import s from './BestSellers.module.scss'
import img161659900A02000 from './../../../../common/assets/shop/1616599-00-A_0_2000.avif'


const items: itemsType[] = [
    {
        image: img161659900A02000,
        subTitle: "Model 3",
        link: 'xxx',
    },
    {
        image: img161659900A02000,
        subTitle: "Model 3",
        link: 'xxx',
    },
    {
        image: img161659900A02000,
        subTitle: "Model 3",
        link: 'xxx',
    },
    {
        image: img161659900A02000,
        subTitle: "Model 3",
        link: 'xxx',
    },
]

const BestSellers = () => {
    return (
        <div className={s.bestSellersContainer}>
            <h1 className={s.title}>Best Sellers</h1>
            <div className={s.bestSellersBlock}>
                {items.map((item, i) => <div key={i} >
                    <img src={item.image} alt={item.subTitle} className={s.block}/>
                    <h3 className={s.subTitle}>{item.subTitle}</h3>
                </div>)}
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