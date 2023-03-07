import {instance} from "./instance";

export const authAPI = {
    me() {
        return instance.get<UserData>(`auth/me`)
    },
    registration(data: RegistrationDataType) {
        console.log(data)
        return instance.post<UserData>(`auth/register`, data)
    },
    login(data: LoginDataType) {
        return instance.post<UserData>('auth/login', data).then((response) => response.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/logout`)
    },
}
// export type UserType = {
//     id: null | number
//     email: null | string
//     firstName: null | string
//     lastName: null | string
//     avatar: null | string
//     role: null | string
//     createdAt: null | string
//     updatedAt: null | string
// }

export type UserData = {
    message: string
    _id: string
    email: string
    firstName: string
    lastName: string
    avatar?: string
    isAdmin: boolean
    rememberMe: boolean
    error?: string
}

export type RegistrationDataType = {
    firstName: string
    lastName: string
    email: string
    password: string
}

export type LoginDataType = {
    email: string
    password: string
}

export type LogoutResponseType = {
    info: string
    error: string
}
