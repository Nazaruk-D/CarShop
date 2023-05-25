import React from 'react';
import s from "./Charging.module.scss"
import DetailsButton from "../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {OrderType} from "../../../../../types/OrderType";

type ChargingPropsType = {
    active: OrderType
    onChangeWallConnector: (status: boolean) => void
    onChangeMobileConnector: (status: boolean) => void
}

const Charging: React.FC<ChargingPropsType> = ({active, onChangeWallConnector, onChangeMobileConnector}) => {
    return (
        <div className={s.chargingContainer}>
            <h2 className={s.title}>Charging</h2>
            <p>Home charging equipment is not included</p>
            <div className={s.checkboxContainer}>
                <div className={s.checkboxBlock}>
                    <input type="checkbox" checked={active.wallConnector.status} onChange={() => onChangeWallConnector(!active.wallConnector.status)}/>
                    <p>Wall Connector</p>
                </div>
                <p>$425</p>
            </div>

            <div className={s.checkboxContainer}>
                <div className={s.checkboxBlock}>
                    <input type="checkbox" checked={active.mobileConnector.status} onChange={() => onChangeMobileConnector(!active.mobileConnector.status)}/>
                    <p>Mobile Connector</p>
                </div>
                <p>$230</p>
            </div>
            <DetailsButton title={"Learn More"} onClick={()=>{}}/>
        </div>
    );
};

export default Charging;