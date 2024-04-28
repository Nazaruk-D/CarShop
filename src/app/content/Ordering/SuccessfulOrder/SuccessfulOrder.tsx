import React, {FC} from 'react';
import {useAppSelector} from "../../../store/store";
import Modal from "../../../../features/profile/Modal/Modal";
import s from './SuccessfulOrder.module.scss'
import PrimaryButton from "../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import {routes} from "../../../routes/routes";
import {useNavigate} from "react-router-dom";

type SuccessfulOrderPropType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

const SuccessfulOrder: FC<SuccessfulOrderPropType> = ({setModalActive, hide}) => {

    const order = useAppSelector(state => state.order.order)
    const totalPrice = useAppSelector(state => state.order.totalPrice)
    const navigate = useNavigate()

    return (
        <Modal setModalActive = {setModalActive} hide = {() => navigate(routes.mainPage)}>
            <div className = {s.successfulOrderContainer}>
                <div className = {s.titleBlock}>
                    <h1>Your order has been successfully completed!</h1>
                </div>
                <div className = {s.infoBlock}>
                    <p>Your order for a <b>Tesla {order.model.title}</b> worth <b>${totalPrice}</b> has been successfully completed and will be
                       processed by our specialists within 24 hours. The sales department will call you to clarify
                       methods of delivery and payment for the car. Thank you for choosing Tesla!</p>
                </div>
                <div className = {s.buttonBlock}>
                    <PrimaryButton title={'Visit Profile Page'} color={'black'} secondColor={'white'}
                                   onClick={() => navigate(routes.profile)}/>
                </div>
            </div>
        </Modal>
    );
};

export default SuccessfulOrder;