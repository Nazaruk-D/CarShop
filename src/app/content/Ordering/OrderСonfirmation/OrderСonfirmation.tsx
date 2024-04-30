import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import Modal from "../../../../features/profile/Modal/Modal";
import s from './OrderConfirmation.module.scss'
import PrimaryButton from "../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import {createOrderTC} from "../order-reducer";

type OrderConfirmationPropType = {
    setModalActive: (modalActive: boolean) => void
    setSecondModalActive: () => void
    hide: () => void
}

const OrderConfirmation: FC<OrderConfirmationPropType> = ({setModalActive, hide, setSecondModalActive}) => {
    const order = useAppSelector(state => state.order.order)
    const userId = useAppSelector(state => state.profile.user.id)
    const totalPrice = useAppSelector(state => state.order.totalPrice)

    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(createOrderTC({...order, userId, totalPrice}));
        setSecondModalActive()
        hide()
    }

    return (
        <Modal setModalActive={setModalActive} hide={hide}>
            <div className={s.orderContainer}>
                <div className={s.titleBlock}>
                    <h1>{order.model.title}</h1>
                </div>
                <div className={s.carInfoBlock}>
                    <p><b>Model:</b> {order.model.title} - {order.model.price}$.</p>
                    <p><b>Color:</b> {order.color.title}{order.color.price ? ` -  ${order.color.price}$` : '.'}</p>
                    <p><b>Wheels:</b> {order.wheels.title}{order.wheels.price ? ` -  ${order.wheels.price}$` : '.'}</p>
                    <p><b>Interior color:</b> {order.interiorColor.title}{order.interiorColor.price ? ` -  ${order.interiorColor.price}$` : '.'}</p>
                    {order.autopilot.status ? <p><b>Autopilot:</b> {order.autopilot.price}$.</p> : <p><b>Autopilot:</b> Not included.</p>}
                    {order.selfDriving?.status ? <p><b>Self driving:</b> {order.selfDriving?.price}$.</p> : <p><b>Self driving:</b> Not included.</p>}
                    {order.wallConnector.status ? <p><b>Wall connector:</b> {order.wallConnector.price}$.</p> : <p><b>Wall connector:</b> Not included.</p>}
                    {order.mobileConnector?.status ? <p><b>Mobile connector:</b> {order.mobileConnector.price}$.</p> : <p><b>Mobile connector:</b> Not included.</p>}
                    <div className={s.totalBlock}>
                        <p style={{fontSize: "20px", fontWeight: 800}}><b>Total price: {totalPrice}$</b></p>
                        <PrimaryButton title={"Order"} color={"black"} secondColor={"white"} onClick={onClickHandler}/>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OrderConfirmation;