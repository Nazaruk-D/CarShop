import React from 'react';
import s from "./OptionWidget.module.scss"
import white from "../../../../../../common/assets/orders/common/color/Paint_White.avif";
import silver from "../../../../../../common/assets/orders/common/color/Paint_Silver.avif";
import blue from "../../../../../../common/assets/orders/common/color/Paint_Blue.avif";
import black from "../../../../../../common/assets/orders/common/color/Paint_Black.avif";
import red from "../../../../../../common/assets/orders/common/color/Paint_Red.avif";
import DetailsButton from "../../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {Element, Link} from "react-scroll";


type OptionWidgetPropsType = {
    title: string
    data: Image[]
    firstDescr?: string
    secondDescr?: string
}

type Image = {
    colorName: string
    img: string
    price: string
}

const OptionWidget: React.FC<OptionWidgetPropsType> = ({data, title, firstDescr, secondDescr}) => {
    return (
        <Element name={title} className={s.optionWidgetContainer} id={title} onMouseEnter={() => console.log(123)} >
            <Link to={"galery"}>123</Link>
        {/*<div className={s.optionWidgetContainer}>*/}
            <h2 className={s.title}>{title}</h2>
            <div className={s.optionBlock}>
                {data.map( (img, i) => <img key={i} src={img.img} alt={img.colorName} className={s.color}/>)}
            </div>
            <div className={s.priceBlock}>
                <p className={s.colorName}>colorName</p>
                <p className={s.colorPrice}>Price</p>
            </div>
            <p className={s.text}>{firstDescr}</p>
            <p className={s.text}>{secondDescr}</p>
            <DetailsButton title={"Learn more"}/>
        {/*</div>*/}
        </Element>
    );
};

export default OptionWidget;