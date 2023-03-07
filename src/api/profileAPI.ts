import {instance} from "./instance";


export const profileAPI = {
    updateProfile(id: number, body: UserType) {
        return instance.post<UserType>(`profile/${id}`, body)
    },
}

export type UserType = {
    id: null | number
    email: null | string
    firstName: null | string
    lastName: null | string
    avatar: null | string
    role: null | string
    createdAt: null | string
    updatedAt: null | string
}

