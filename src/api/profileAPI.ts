import {instance} from "./instance";

export const profileAPI = {
    updateProfile(body: UserType) {
        return instance.put<UserType>(`profile/update`, body)
    },
    resetPassword(passwordData: ResetUserPasswordType) {
        return instance.put<ResetUserPasswordType>(`profile/resetPassword`, passwordData)
    },
    getUsers({limit, page}:GetUsersType) {
        return instance.get(`profile/users?limit=${limit}&page=${page}`)
    },
    deleteUser(deleteData: DeleteUserType) {
        return instance.delete(`profile/delete`, {data: deleteData})
    },
}

export type GetUsersType = {
    limit: null | number
    page: null | number
}

export type DeleteUserType = {
    email: null | string
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

export type ResetUserPasswordType = {
    id: null | number
    password: null | string
}


