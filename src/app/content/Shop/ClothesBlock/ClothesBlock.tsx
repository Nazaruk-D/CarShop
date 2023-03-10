import React from 'react';
import s from "./ClothesBlock.module.scss"
import man from "../../../../common/assets/shop/Men_web.avif"
import women from "../../../../common/assets/shop/Women_web.avif"
import kids from "../../../../common/assets/shop/Kids_web.avif"
import PrimaryButton from "../../../../common/components/buttons/PrimaryButton/PrimaryButton";


const clothesData: clothesDataType[] = [
    {
        backgroundImage: man,
        title: "Men's Apparel",
    },
    {
        backgroundImage: women,
        title: "Women's Apparel",
    },
    {
        backgroundImage: kids,
        title: "Kids’ Apparel",
    }
]

const ClothesBlock = () => {
    return (
        <div className={s.clothesContainer}>
            {clothesData.map((d, i) => <div key={i} className={s.clothesBlock} style={{backgroundImage: `url(${d.backgroundImage})`}}>
                <div>
                    <div className={s.title}>{d.title}</div>
                    <PrimaryButton title={"Shop now"} color={"black"} secondColor={"white"} onClick={() => {}}/>
                </div>
            </div>)}
        </div>
    );
};

export default ClothesBlock;

type clothesDataType = {
    backgroundImage: string
    title: string
}