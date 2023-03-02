import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginDataType, RegistrationDataType} from "../../api/userAPI";
import {setAppStatusAC} from "../../app/app-reducer";
import {handleServerNetworkError} from "../../utils/error-utils";
import {AxiosError} from "axios";
import {clearProfileDataAC} from "../profile/profile-reducer";


export const loginTC = createAsyncThunk<undefined, LoginDataType, { rejectValue: { errors: Array<string>, fieldErrors?: Array<any> } }>(('auth/login'), async (param: LoginDataType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await authAPI.login(param)
        // if (res.message === 'Login successful') {
        //     debugger
            // thunkAPI.dispatch(setIsLoggedInAC({value: true}))
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return
        // } else {
        //     handleServerAppError(res.message, thunkAPI.dispatch)
        //     return thunkAPI.rejectWithValue({errors: [res.message], fieldErrors: [res.message]})
            // return thunkAPI.rejectWithValue({errors: ["error"], fieldErrors: []})
        // }
    } catch (err: any) {
        const error: AxiosError = err.response.data
        handleServerNetworkError(error, thunkAPI.dispatch)
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
    } finally {
        thunkAPI.dispatch(setAppStatusAC({status: 'idle'}))
    }
})

export const logoutTC = createAsyncThunk(('auth/logout'), async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await authAPI.logout()
        if (res.status === 200) {
            thunkAPI.dispatch(clearProfileDataAC())
            thunkAPI.dispatch(setIsLoggedInAC({value: false}))
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return
        } else {
            // handleServerAppError(res.data, thunkAPI.dispatch)
            return thunkAPI.rejectWithValue({})
        }
    } catch (error: any) {
        // handleServerNetworkError(error, thunkAPI.dispatch)
        return thunkAPI.rejectWithValue({})
    }
})

export const registrationTC = createAsyncThunk<undefined, RegistrationDataType, { rejectValue: { errors: Array<string>, fieldErrors?: Array<any> } }>(('auth/registration'), async (param: RegistrationDataType, thunkAPI) => {
    thunkAPI.dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await authAPI.registration(param)
        if (res.status === 200) {
            // thunkAPI.dispatch(setIsLoggedInAC({value: false}))
            thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            // thunkAPI.dispatch(clearTodosDataAC())
            //Зачистить данные после положительного ответа
            return
        } else {
            // handleServerAppError(res.data, thunkAPI.dispatch)

            return thunkAPI.rejectWithValue({errors: ["error"], fieldErrors: []})
        }
    } catch (err: any) {
        thunkAPI.dispatch(setAppStatusAC({status: 'failed'}))
        const error: AxiosError = err.response.data
        handleServerNetworkError(error, thunkAPI.dispatch)
        return thunkAPI.rejectWithValue({errors: [error.message], fieldErrors: undefined})
        // handleServerNetworkError(error, thunkAPI.dispatch)
        // return thunkAPI.rejectWithValue({})
    }
})


// export const updateUser =
//     (data: { name?: string; avatar?: string }): AppThunk =>
//         (dispatch, getState: () => AppRootStateType) => {
//             dispatch(setAppStatusAC('loading'))
//             const user = getState().auth.user
//             const userUpdate = {...user, ...data}
//             authAPI
//                 .changeNameOrImg(data)
//                 .then(() => dispatch(setUserDataAC(userUpdate)))
//                 .catch((err: any) => {
//                     let error = err.response.data.error
//                     dispatch(setErrAC(error))
//                     dispatch(setAppStatusAC('failed'))
//                 })
//                 .finally(() => dispatch(setAppStatusAC('idle')))
//         }


const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers: builder => {
        builder.addCase(loginTC.fulfilled, (state) => {
            state.isLoggedIn = true
        })
        builder.addCase(logoutTC.fulfilled, (state) => {
            state.isLoggedIn = false
        })
    }
})

export const authReducer = slice.reducer;
export const {setIsLoggedInAC} = slice.actions;
