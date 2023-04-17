import {instance} from "./instance";
import {GetUsersType} from "./profileAPI";

export const demoDriveAPI = {
    updateDemoDriveStatus(changeData: ChangeStatusType) {
        return instance.put(`demo-drive/updateDemoDriveStatus`, changeData)
    },
    getDemoDriveOrders({limit, page, model = ''}:GetDemoDriveOrdersType) {
        return instance.get(`demo-drive/getDemoDriveOrders?limit=${limit}&page=${page}&model=${model}`)
    },
    createDemoDriveOrder(orderData: CreateOrderType) {
        return instance.put(`demo-drive/createDemoDriveOrder`, orderData)
    },
}

export type GetDemoDriveOrdersType = {
    limit: null | number
    page: null | number
    model?: null | string
}

export type ChangeStatusType = {
    status: string
    id: null | number
    // callback: () => Promise<void>;
    callback: any;
}
export type CreateOrderType = {
    model: null | string
    email: null | string
    firstName: null | string
    lastName: null | string
    phoneNumber: null | string
    contactPreference: null | string
    region: null | string
}

export type DemoDriveType = {
    model: null | string
    id: null | number
    email: null | string
    firstName: null | string
    lastName: null | string
    status: null | string
    contactPreference: null | string
    phoneNumber: null | string
    createdAt: null | string
    updatedAt: null | string
    // region: null | string
}

