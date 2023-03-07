import {instance} from "./instance";


export const profileAPI = {
    updateProfile(body: UserType) {
        console.log(body)
        return instance.put<UserType>(`profile/update`, body)
    },
}


export type UserType = {
    id: null | number
    email: null | string
    firstName: null | string
    lastName: null | string
    avatar: null | string
    role: null | string
    phoneNumber: null | string
    region: null | string
    createdAt: null | string
    updatedAt: null | string
}

