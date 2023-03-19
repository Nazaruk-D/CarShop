import {instance} from "./instance";
import {GetUsersType} from "./profileAPI";

export const demoDriveAPI = {
    updateDemoDriveStatus(changeData: ChangeStatusType) {
        return instance.put(`demo-drive/updateDemoDriveStatus`, changeData)
    },
    getDemoDriveOrders({limit, page}:GetUsersType) {
        return instance.get(`demo-drive/getDemoDriveOrders?limit=${limit}&page=${page}`)
    },
}

export type ChangeStatusType = {
    status: string
    id: null | number
    // callback: () => Promise<void>;
    callback: any;
}

