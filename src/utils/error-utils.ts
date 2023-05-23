import {setAppErrorAC, setAppStatusAC} from "../app/app-reducer";

export const handleServerAppError = <T>(data: any, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC({message: data.messages[0]}))
    } else {
        dispatch(setAppErrorAC({message: 'Some error occurred'}))
    }
    dispatch(setAppStatusAC({status: 'failed'}))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: ErrorUtilsDispatchType) => {
    dispatch(setAppErrorAC({message: error.message}))
    dispatch(setAppStatusAC({status: 'failed'}))
}

type ErrorUtilsDispatchType = any