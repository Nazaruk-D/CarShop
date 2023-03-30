import {AnyAction, combineReducers} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "../app-reducer";
import {authReducer} from "../../features/auth/auth-reducer";
import {profileReducer} from "../../features/profile/profile-reducer";
import {usersReducer} from "../../features/profile/MainBlock/UsersList/users-reducer";
import {orderReducer} from "../content/Ordering/order-reducer";
import {demoDriveReducer} from "../../features/profile/MainBlock/DemoDrivePanel/demo-drive-reducer";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    users: usersReducer,
    order: orderReducer,
    demoDrive: demoDriveReducer,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppActionType = any
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

// @ts-ignore
window.store = store;

