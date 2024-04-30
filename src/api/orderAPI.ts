import {instance} from "./instance";

export const orderAPI = {
    createOrder(orderData: CreateOrderType) {
        return instance.put(`order/createOrder`, orderData)
    },
    getUserOrders({userId}: GetUserOrderType) {
        return instance.get(`order/getUserOrders?user_id=${userId}`)
    }
}

export type CreateOrderType = {
    model: {title: string, price: number | null}
    color: {title: string, price: number | null}
    wheels: {title: string, price: number | null}
    interiorColor: {title: string, price: number | null}
    seatingLayout?: {title: string, price: number | null}
    autopilot: {status: boolean, price: number | null}
    steeringControl?: {status: boolean, price: number | null}
    towHitch?: {status: boolean, price: number | null}
    selfDriving?: {status: boolean, price: number | null}
    wallConnector: {status: boolean, price: number | null}
    mobileConnector: {status: boolean, price: number | null}
    userId: number | null
    totalPrice: number | null
}
export type GetUserOrderType = {
    userId: number | null
}

