import React, {useEffect} from 'react';
import s from "./Orders.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../app/store/store";
import {getUserOrdersTC} from "../../../../app/content/Ordering/order-reducer";
import {getImageForOrder} from "./Orders.helpers";

const Orders = () => {
    const dispatch = useAppDispatch()
    const userId = useAppSelector(s => s.profile.user.id)
    const userOrders = useAppSelector(s => s.profile.orders)

    useEffect(() => {
        dispatch(getUserOrdersTC({userId}))
    },[])

    const onViewClickHandler = (orderId: number) => {

    }

    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Order History</h1>
            </div>
            <div className={s.contentBlock}>
                {userOrders.map((o, i) => (
                    <div className={s.itemBlock} key={i}>
                        <div className={s.imageContainer} style={{backgroundImage: `url(${getImageForOrder(o.model, o.color)})`}}></div>
                        <div className={s.descriptionBlock}>
                            <span className={s.description}>Your <b>{o.model}</b></span>
                            <span className={s.descriptionButton} onClick={() => onViewClickHandler(o.id)}>View</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Orders;