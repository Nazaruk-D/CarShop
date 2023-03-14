import React, {useContext} from 'react';
import s from "./OptionWidget.module.scss"
import DetailsButton from "../../../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {useInView} from "react-intersection-observer";
import {Context, ContextType} from "../../../Model3Order";
import {OrderType} from "../../../../order-reducer";
import {Model3DataTypeChildColor} from "../../../Model3Data";


type OptionWidgetPropsType = {
    title: string
    data: Model3DataTypeChildColor[]
    firstDescription?: string
    secondDescription?: string
    active: OrderType
    type: string
    changeWidget: (value: string, title: string, price: number) => void
}


const OptionWidget: React.FC<OptionWidgetPropsType> = ({data, type,title, firstDescription, secondDescription, active, changeWidget}) => {
    const [context, setContext] = useContext<ContextType>(Context);
    const {ref, inView} = useInView({
        threshold: 0,
    });

    if (inView) {
        setContext(title)
    }

    return (
        <div className={s.optionWidgetContainer} ref={ref}>
            <h2 className={s.title}>{title}</h2>
            <div className={s.optionBlock}>
                {data.map((d, i) =>
                    <div key={i} className={d.type === (active as any)[type].title ? s.isActive : s.notActive} onClick={() => changeWidget(title, d.type, d.price)}>
                    <img src={d.img} alt={d.type} className={s.color}/>
                </div>)}
            </div>
            {data.map( (d, i) => d.type === (active as any)[type].title ? <div key={i} className={s.priceBlock}>
                <p className={s.colorName}>{d.type}</p>
                <p className={s.colorPrice}>{d.price === 0 ? "Include" : `$${d.price}`}</p>
            </div> : "") }
            <p className={s.text}>{firstDescription}</p>
            <p className={s.text}>{secondDescription}</p>
            <DetailsButton title={"Learn more"} onClick={()=>{}}/>
        </div>
    );
};

export default OptionWidget;