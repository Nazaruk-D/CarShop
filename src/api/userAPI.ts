import {instance} from "./instance";

export const authAPI = {
    me() {
        return instance.get<UserData>(`auth/me`)
    },
    registration(data: RegistrationDataType) {
        return instance.post<UserData>(`auth/register`, data)
    },
    login(data: LoginDataType) {
        return instance.post<UserData>('auth/login', data).then((response) => response.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/me`)
    },
}


export type UserData = {
    _id: string
    email: string
    name: string
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
