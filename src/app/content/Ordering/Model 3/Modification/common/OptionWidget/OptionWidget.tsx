import React, {useContext} from 'react';
import s from "./OptionWidget.module.scss"
import DetailsButton from "../../../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {useInView} from "react-intersection-observer";
import {Context, ContextType} from "../../../Model3Order";
import {ActiveType} from "../../Modification";
import {model3Data} from "../../../Model3Data";


type OptionWidgetPropsType = {
    title: string
    data: CommonType[]
    firstDescr?: string
    secondDescr?: string
    active: ActiveType
    type: string
    changeWidget: (value: string, title: string) => void
}

type CommonType = {
    type: string
    img: string
    price: number
}

const OptionWidget: React.FC<OptionWidgetPropsType> = ({data, type,title, firstDescr, secondDescr, active, changeWidget}) => {
    const [context, setContext] = useContext<ContextType>(Context);
    const {ref, inView, entry} = useInView({
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
                    <div key={i} className={d.type === active[type as keyof ActiveType] ? s.isActive : s.notActive} onClick={() => changeWidget(d.type, title)}>
                    <img src={d.img} alt={d.type} className={s.color}/>
                </div>)}
            </div>
            {data.map( d => d.type === active[type as keyof ActiveType] ? <div className={s.priceBlock}>
                <p className={s.colorName}>{d.type}</p>
                <p className={s.colorPrice}>{d.price === 0 ? "Include" : `$${d.price}`}</p>
            </div> : "") }
            <p className={s.text}>{firstDescr}</p>
            <p className={s.text}>{secondDescr}</p>
            <DetailsButton title={"Learn more"}/>
        </div>
    );
};

export default OptionWidget;