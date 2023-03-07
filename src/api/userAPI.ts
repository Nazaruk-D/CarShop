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
        return instance.post<ResponseType<UserData>>('auth/login', data).then((response) => response.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/logout`)
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

export type ResponseType<D = {}> = {
    statusCode: number
    statusText: string
    message: string
    data: D
}

export type UserData = {
    _id: string
    email: string
    firstName: string
    lastName: string
    avatar?: string
    isAdmin: boolean
    // rememberMe: boolean
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
