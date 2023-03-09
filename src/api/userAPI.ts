import {instance} from "./instance";
import {UserType} from "./profileAPI";

export const authAPI = {
    me() {
        return instance.get<UserType>(`auth/me`)
    },
    registration(data: RegistrationDataType) {
        console.log(data)
        return instance.post<UserType>(`auth/register`, data)
    },
    login(data: LoginDataType) {
        return instance.post<ResponseType<UserType>>('auth/login', data).then((response) => response.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/logout`)
    },
}


export type ResponseType<D = {}> = {
    statusCode: number
    message: string
    data: D
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
