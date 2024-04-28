import React from 'react';
import s from './Order.module.scss'
import PrimaryButton from "../../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import Button from "../../../../../common/components/buttons/Button/Button";
import {routes} from "../../../../routes/routes";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../../store/store";

export type OrderPropsType = {
    carName: "Model Y" | "Model 3" | "Model S" | "Model X"
    backgroundImage: string
}

const Order: React.FC<OrderPropsType> = ({carName, backgroundImage}) => {

    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn)

    let route: string;
    switch (carName) {
        case 'Model Y':
            route = routes.orderingModelY;
            break;
        case 'Model X':
            route = routes.orderingModelX;
            break;
        case 'Model S':
            route = routes.orderingModelS;
            break;
        case 'Model 3':
            route = routes.orderingModel3;
            break;
        default:
            route = routes.orderingModelY;
            break;
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.orderContainer}>
                <div className={s.titleBlock}>
                    <div className={s.title}>Order {carName}</div>
                    <div className={s.buttonsBlock}>
                        <PrimaryButton title={'Order Now'} color={'black'} secondColor={'white'} onClick={() => navigate(isLoggedIn ? route : routes.login)}/>
                        <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                                color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
                        }}/>
                    </div>
                </div>
            </div>
            <div className={s.imageContainer} >
                <div className={s.image} style={{backgroundImage: `url(${backgroundImage})`}}></div>
            </div>

        </div>
    );
};

export default Order;