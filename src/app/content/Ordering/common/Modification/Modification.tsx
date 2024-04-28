import React, {FC, useEffect, useState} from 'react';
import s from "./Modification.module.scss";
import Title from "../../common/Title/Title";
import Order from "../../common/Order/Order";
import CharacteristicsBlock from "../../common/CharacteristicsBlock/CharacteristicsBlock";
import Equipment from "../../common/Equipment/Equipment";
import Autopilot from "../../common/Autopilot/Autopilot";
import OptionWidget from "../../common/OptionWidget/OptionWidget";
import SelfDriving from "../../common/SelfDriving/SelfDriving";
import Charging from "../../common/Charging/Charging";
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import {clearModelTitle, setOrderState, totalSumAC} from "../../order-reducer";
import {ModelData, modelDataTypeChild} from "../../../../../types/DataType";
import {OrderType} from "../../../../../types/OrderType";

type ModificationPropsType = {
    modelData: ModelData
}

const Modification: FC<ModificationPropsType> = ({modelData}) => {
    const dispatch = useAppDispatch()
    const orderStore = useAppSelector(s => s.order.order);

    const defaultActiveValues: OrderType = {
        model: {title: modelData[0].model, price: modelData[0].price},
        color: {title: "Pearl White Multi-Coat", price: null},
        wheels: {title: modelData[0].wheels[0].type, price: null},
        interiorColor: {title: "All Black", price: null},
        autopilot: {status: false, price: null},
        selfDriving: {status: false, price: null},
        wallConnector: {status: false, price: null},
        mobileConnector: {status: false, price: null},
    }

    const [active, setActive] = useState<OrderType>(orderStore?.model?.title ? orderStore : defaultActiveValues)
    const data = modelData.find((m: modelDataTypeChild) => m.model === active.model.title)!

    const changeEquipment = (title: string, price: number) => {
        setActive({...active, model: {title, price}})
    }

    const changeWidget = (value: string, title: string, price: number) => {
        if (value === "Paint") {
            setActive({...active, color: {title, price}})
        } else if (value === "Wheels") {
            setActive({...active, wheels: {title, price}})
        } else if (value === "Interior") {
            setActive({...active, interiorColor: {title, price}})
        }
    }

    const onChangeAutopilotStatus = (payload: {status: boolean, price: number}) => {
        setActive({...active, autopilot: payload})
    }

    const onChangeSelfDrivingStatus = (payload: {status: boolean, price: number}) => {
        setActive({...active, selfDriving: payload})
    }

    const onChangeWallConnector = (status: boolean) => {
        if (status) {
            setActive({...active, wallConnector: {status, price: 425}})
        } else {
            setActive({...active, wallConnector: {status, price: 0}})
        }
    }

    const onChangeMobileConnector = (status: boolean) => {
        if (status) {
            setActive({...active, mobileConnector: {status, price: 425}})
        } else {
            setActive({...active, mobileConnector: {status, price: 0}})
        }
    }

    useEffect(() => {
        const totalSum = () => {
            let total = 0;
            for (let prop in active) {
                if (active.hasOwnProperty(prop) && prop !== 'totalPrice') {
                    total += (active as any)[prop].price;
                }
            }
            dispatch(totalSumAC(total))
        }
        totalSum()
        dispatch(setOrderState(active))
    },[active, dispatch])

    const clearOrderData = () => {
        dispatch(clearModelTitle())
    }

    useEffect(() => {
        return () => clearOrderData()
    }, [])

    return (
        <div className={s.modificationContainer}>
            <div className={s.modificationBlock}>
                <Title title={data.model} date={data.delivery}/>
                <CharacteristicsBlock data={data.characteristics}/>
                <Equipment data={modelData} changeEquipment={changeEquipment} active={active}/>
                <OptionWidget type={"color"} title={"Paint"} data={data.color} active={active} changeWidget={changeWidget}/>
                <OptionWidget type={"wheels"} title={"Wheels"} data={data.wheels} active={active} changeWidget={changeWidget} firstDescription={data.wheels[0].season} secondDescription={data.wheels[0].range}/>
                <OptionWidget type={"interiorColor"} title={"Interior"} data={data.interiorColor} active={active} changeWidget={changeWidget}/>
                <Autopilot active={active} onChangeAutopilotStatus={onChangeAutopilotStatus}/>
                <SelfDriving active={active} onChangeSelfDrivingStatus={onChangeSelfDrivingStatus}/>
                <Charging active={active} onChangeWallConnector={onChangeWallConnector} onChangeMobileConnector={onChangeMobileConnector}/>
                <Order title={modelData[0].title} active={active} />
            </div>
        </div>
    );
};

export default Modification;