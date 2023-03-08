import {instance} from "./instance";


export const profileAPI = {
    updateProfile(body: UserType) {
        console.log(body)
        return instance.put<UserType>(`profile/update`, body)
    },
    resetPassword(passwordData: ResetUserPasswordType) {
        console.log(passwordData)
        return instance.put<ResetUserPasswordType>(`profile/resetPassword`, passwordData)
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

export type ResetUserPasswordType = {
    id: null | number
    password: null | string
}


